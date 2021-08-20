const Itinerary = require('../models/Itinerary')
const handleError = (res,err) =>{
    console.log(err.message)
    res.json({success: false, response: err.message})
}

const itinerariesControllers = {
    getAllItineraries:(req, res) =>{
        Itinerary.find() // devuelve array vacio si no tiene nada
        .then(itineraries => res.json({success: true, response: itineraries}))
        .catch(err => handleError(res,err))
    },
    getAllItinerariesFromCity: (req, res) =>{
        Itinerary.find({city:req.params.id}).populate('city')
        .then(itineraries => res.json({success: true, response: itineraries}))
        .catch(err => handleError(res, err))
    },
    getAnItinerary:(req, res) =>{
        Itinerary.findOne({_id: req.params.id}) // me devuelve null si no hay nada
        .then(itinerary => res.json({success: true, response: itinerary}))
        .catch(err => handleError(res,err))
    },
    postAnItinerary:(req, res) =>{ // a posteriori hay que validar ésto si tiene opcion un usuario de postear.
        const newItinerary = new Itinerary({...req.body}) // spredeo todas las props que me traen en la petición
        newItinerary.save()
        .then(itinerary => res.json({success: true, response: itinerary}))
        .catch(err => handleError(res,err))
    },
    removeAnItinerary:(req, res) =>{ // busca la ciudad, si la borra devuelve lo que borró, sino null.
        Itinerary.findOneAndDelete({_id: req.body._id})
        .then(itinerary => {
            itinerary ? res.json({success: true, response: itinerary}) : res.json({success: false, response: "no itinerary found"})
        })
        .catch(err => handleError(res,err))
        // pedir al modelo que elimine la ciudad que requeri.
    },
    modifyAnItinerary:(req, res)=>{ 
        Itinerary.findOneAndUpdate({_id: req.body._id}, {...req.body}, {new:true}) // busca por el obj parametro, luego obj lo que voy a actualizar. si encuentra devuelve lo que encontró y por param new, el nuevo documento, si no null
        .then(itinerary => {
            itinerary ? res.json({success: true, response: itinerary}) : res.json({success: false, response: "no itinerary found"})
        })
        .catch(err => handleError(res,err))
    }
}
module.exports = itinerariesControllers