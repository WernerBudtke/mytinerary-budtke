const joi = require('joi')
const validatorControllers ={
    validatorSignUp : (req, res, next) =>{
        const schema = joi.object({
            firstName: joi.string().trim().min(2).max(35).pattern(new RegExp('[^0-9]+$')).required(), //posiblemente agregar regExp de a-zA-Z - el tema es si te viene alguien con caract especial.
            lastName: joi.string().trim().min(2).max(35).pattern(new RegExp('[^0-9]+$')).required(),  //posiblemente agregar regExp de a-zA-Z - 
            eMail: joi.string().trim().min(6).max(255).email().required(),
            password: joi.string().alphanum().trim().min(4).max(255).required(),
            photoURL: joi.string().trim().min(6).max(2048).required(),
            country: joi.string().trim().min(4).max(56).required(),
            google: joi.boolean().required()
        })
        // regexp ('[a-zA-Z]')
        // regexp ('\d[a-Z]')
        // .pattern(new RegExp('g[a-zA-Z]$')) por ej, revisar ^[a-zA-Z]+$
        const validation = schema.validate(req.body, {abortEarly: false})
        // console.log(validation)
        if(!validation.error){
            next()
        }else{
            // console.log(validation.error.details)
            let validationStringified = validation.error.details.map(element => element.message).join(' ')
            // console.log(validationStringified)
            res.json({success: false, response: validationStringified})
        }
        // hacer validaciones, si supera /next()
        // si no supera, contestar a frontend, success: false + cual errores
    }
}
module.exports = validatorControllers