const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const handleError = (res,err) =>{
    console.log(err.message)
    res.json({success: false, response: err.message})
}
const userControllers = {
    registerUser: (req, res) =>{
        console.log("Received Register User Petition:" + Date())
        const {lastName, firstName, password, eMail, photoURL, country, admin} = req.body
        const name = {lastName, firstName}
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
            const token = jwt.sign({...newUser}, process.env.SECRETORKEY, {expiresIn: '1d'})
            res.json({success: true, response: {photoURL: user.photoURL, token, firstName: user.name.firstName, likedItineraries: user.likedItineraries}})})
        .catch(err => {
            res.json({success: false, response: err.message.includes('duplicate key') ? 'eMail already in use' : err.message})
        })
    },
    logUser: (req, res)=>{
        console.log("Received SIGN IN USER Petition:" + Date())
        const errMessage = "Invalid username or pass"
        const {eMail, password} = req.body
        User.exists({eMail: eMail}).then(exists => {
            if(exists){
                User.findOne({eMail: eMail})
                .then(userFound => {
                    if(!bcryptjs.compareSync(password, userFound.password))throw new Error(errMessage)
                    const token = jwt.sign({...userFound}, process.env.SECRETORKEY, {expiresIn: '1d'}) 
                    res.json({success: true, response: {photoURL: userFound.photoURL, token, firstName: userFound.name.firstName, likedItineraries: userFound.likedItineraries}})
                })
                .catch(err => handleError(res, err))
            }else{
                throw new Error(errMessage)
            } 
        })
        .catch(err => handleError(res, err))   
    },
    removeUser: (req, res) =>{
        console.log("Received Remove User Petition:" + Date())
        User.findOneAndDelete({_id: req.body._id})
        .then(user => {
            user ? res.json({success: true, response: user}) : res.json({success: false, response: "no user found"})
        })
        .catch(err => handleError(res,err))
    },
    isValidUser: (req, res) =>{
        console.log("Received Valid from Local Storage User Check Petition:" + Date())
        if(req.user){
            res.json({success: true})
        }else{
            res.json({success: false})
        }
    },
}
module.exports = userControllers