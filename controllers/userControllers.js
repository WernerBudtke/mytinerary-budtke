const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const handleError = (res,err) =>{
    console.log(err.message)
    res.json({success: false, response: err.message})
}
const userControllers = {
    registerUser: (req, res) =>{
        const {lastName, firstName, password, eMail, photoURL, country, admin} = req.body
        const name = {lastName, firstName}
        if(password){
            if(password.length > 0){
                let hashedPass = bcryptjs.hashSync(password)
                const newUser = new User({
                    name,
                    password : hashedPass,
                    eMail,
                    photoURL,
                    country,
                    admin
                })
                newUser.save()
                .then(user=> res.json({success: true, response: user}))
                .catch(err => {
                    res.json({success: false, response: err.message.includes('duplicate key') ? 'eMail already in use' : err.message})
                })
            }else{
                res.json({success: false, response: "password can't be blank"})
            }
        }else{
            res.json({success: false, response: "password can't be blank"})
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
                    res.json({success: true})
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
    }
}
module.exports = userControllers