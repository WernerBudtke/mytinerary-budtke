const City = require('../models/City')
const handleError = (res,err) =>{
    console.log(err.message)
    res.json({success: false, response: err.message})
}

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
            city: req.body.city,
            country: req.body.country,
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
