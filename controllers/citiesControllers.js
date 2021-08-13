const City = require('../models/City')
const handleError = (res,err) =>{
    console.log(err.message)
    res.json({success: false, response: err.message})
}
const handleCapitalize = (string) => string.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1,word.length)).join(' ')
const citiesControllers = {
    getAllCities:(req, res) =>{
        City.find() // devuelve array vacio si no tiene nada
        .then(cities => res.json({success: true, response: cities}))
        .catch(err => handleError(res,err))
    },
    getACity:(req, res) =>{
        // pedir al modelo la ciudad que requiere, devolver a frontend
        City.findOne({_id: req.params.id}) // me devuelve null si no hay nada
        .then(city => res.json({success: true, response: city}))
        .catch(err => handleError(res,err))
    },
    postACity:(req, res) =>{ /// CHEQUEAR BIEN QUE MIERDA LLEGA ACA
        const newCity = new City({
            city: typeof req.body.city === "string" && handleCapitalize(req.body.city),
            country: typeof req.body.country === "string" && handleCapitalize(req.body.country),
            description: req.body.description,
            image: req.body.image
        })
        newCity.save()
        .then(city => res.json({success: true, response: city}))
        .catch(err => handleError(res,err))
    },
    removeACity:(req, res) =>{
        City.findOneAndDelete({_id: req.body._id})
        .then(city => res.json({success: true, response: city}))
        .catch(err => handleError(res,err))
        // pedir al modelo que elimine la ciudad que requeri.
    },
    modifyACity:(req, res)=>{
        City.findOneAndUpdate({_id: req.body._id}, {...req.body})
        .then(city => res.json({success: true, response: city}))
        .catch(err => handleError(res,err))
    }
}

module.exports = citiesControllers


// if(req.get("API-KEY") === '1337'){
        //     if(typeof req.body  !=  typeof undefined){
        //         // console.log("funciono filtro de obj indefinido")
        //         // console.log(typeof req.body)
        //         // console.log(Object.keys(req.body).length) // filtro a ver cuantas props me mandan
        //         if(Object.keys(req.body).length >= 4){
        //             let myValues = Object.values(req.body) // guardo valores del objeto en un array
        //             let badValues = myValues.filter(value => typeof value !== "string")
        //             if(badValues.length > 0){ 
        //                 res.json({success: false, reason: "values of keys are not string type"})
        //             }else{
        //                 const newCity = new City({
        //                     city: req.body.city,
        //                     country: req.body.country,
        //                     description: req.body.description,
        //                     image: req.body.image
        //                 })
        //                 newCity.save()
        //                 .then(city => res.json({success: true, posted: city}))
        //                 .catch(err => res.json({success: false, reason: err}))
        //             }       
        //         }else{
        //             res.json({success: false, reason: "check that you have all needed properties"})
        //         }       
        //     }else{
        //         res.json({success: false, reason: "undefined"})
        //     }
        // }else{
        //     res.json({success: false, reason: "bad api token"})
        // }

