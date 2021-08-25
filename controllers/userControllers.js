const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const handleError = (res,err) =>{
    console.log(err.message)
    res.json({success: false, response: err.message})
}
const userControllers = {
    registerUser: (req, res) =>{
        const {lastName, firstName, password, eMail, photoURL, country, admin} = req.body
        const name = {lastName, firstName}
        const missingFields = () =>{
            let namesOfFields = ["firstName", "lastName", "eMail", "password", "photoURL", "country"]
            let bodyFields = [firstName, lastName, eMail, password, photoURL, country]
            return namesOfFields.filter((field, index) => bodyFields[index] === "").join(' ')
        }
        if(password && lastName && firstName && eMail && photoURL && country){
            if(password.length > 0){ // aca volar al choto con Joi o como sea el middleware
                let hashedPass = bcryptjs.hashSync(password)
                const newUser = new User({
                    name,
                    password : hashedPass,
                    eMail,
                    photoURL,
                    country,
                    admin
                })
                newUser.save() // encrypta los datos que grabo en la base de datos, con la frase secreta.
                .then(user => {
                    const token = jwt.sign({...newUser}, process.env.SECRETORKEY)
                    res.json({success: true, response: {photoURL: user.photoURL, token, firstName: user.name.firstName}})})
                .catch(err => {
                    res.json({success: false, response: err.message.includes('duplicate key') ? 'eMail already in use' : err.message})
                })
            }else{
                res.json({success: false, response: missingFields()})
            }
        }else{
            res.json({success: false, response: missingFields()})
        }
    },
    logUser: (req, res)=>{
        const errMessage = "Invalid username or pass"
        const {eMail, password} = req.body
        User.exists({eMail: eMail}).then(exists => {
            if(exists){
                User.findOne({eMail: eMail})
                .then(userFound => {
                    if(!bcryptjs.compareSync(password, userFound.password))throw new Error(errMessage)
                    const token = jwt.sign({...userFound}, process.env.SECRETORKEY) 
                    res.json({success: true, response: {photoURL: userFound.photoURL, token, firstName: userFound.name.firstName}})
                })
                .catch(err => handleError(res, err))
            }else{
                throw new Error(errMessage)
            } 
        })
        .catch(err => handleError(res, err))   
    },
    getUsers: (req, res) =>{
        User.find()
        .then(users=> res.json({success: true, response: users}))
        .catch(err => handleError(res,err))
    },
    removeUser: (req, res) =>{
        User.findOneAndDelete({_id: req.body._id})
        .then(user => {
            user ? res.json({success: true, response: user}) : res.json({success: false, response: "no user found"})
        })
        .catch(err => handleError(res,err))
    },
    isValidUser: (req, res) =>{
        let savedToken = req.get('Authorization')
        try {
            jwt.verify(savedToken, process.env.SECRETORKEY)
        }catch(err){
            res.json({success: false})
            return
        }
        res.json({success: true}) // response: {photoURL: verifiedToken._doc.photoURL}
    }
}
module.exports = userControllers