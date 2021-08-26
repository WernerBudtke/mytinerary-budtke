const City = require('../models/City')
const handleError = (res,err) =>{
    console.log(err.message)
    res.json({success: false, response: err.message})
}

const citiesControllers = {
    getAllCities:(req, res) =>{
        console.log("Received Get Cities Petition:" + Date())
        City.find() // devuelve array vacio si no tiene nada
        .then(cities => res.json({success: true, response: cities}))
        .catch(err => handleError(res,err))
    },
    getACity:(req, res) =>{
        // pedir al modelo la ciudad que requiere, devolver a frontend
        console.log("Received Get City Petition:" + Date())
        City.findOne({_id: req.params.id}) // me devuelve null si no hay nada
        .then(city => res.json({success: true, response: city}))
        .catch(err => handleError(res,err))
    },
    postACity:(req, res) =>{ // a posteriori hay que validar ésto si tiene opcion un usuario de postear.
        console.log("Received Post City Petition:" + Date())
        const newCity = new City({...req.body}) // spredeo todas las props que me traen en la petición
        newCity.save()
        .then(city => res.json({success: true, response: city}))
        .catch(err => handleError(res,err))
    },
    removeACity:(req, res) =>{ // busca la ciudad, si la borra devuelve lo que borró, sino null.
        console.log("Received Remove City Petition:" + Date())
        City.findOneAndDelete({_id: req.body._id})
        .then(city => {
            city ? res.json({success: true, response: city}) : res.json({success: false, response: "no city found"})
        })
        .catch(err => handleError(res,err))
        // pedir al modelo que elimine la ciudad que requeri.
    },
    modifyACity:(req, res)=>{ 
        console.log("Received Modify City Petition:" + Date())
        City.findOneAndUpdate({_id: req.body._id}, {...req.body}, {new:true}) // busca por el obj parametro, luego obj lo que voy a actualizar. si encuentra devuelve lo que encontró y por param new, el nuevo documento, si no null
        .then(city => {
            city ? res.json({success: true, response: city}) : res.json({success: false, response: "no city found"})
        })
        .catch(err => handleError(res,err))
    }
}
module.exports = citiesControllers
