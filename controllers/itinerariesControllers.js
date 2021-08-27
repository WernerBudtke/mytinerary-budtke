const Itinerary = require('../models/Itinerary')
const User = require('../models/User')
const handleError = (res,err) =>{
    console.log(err.message)
    res.json({success: false, response: err.message})
}

const itinerariesControllers = {
    getAllItineraries:(req, res) =>{
        console.log("Received Get All Itineraries Petition:" + Date())
        Itinerary.find() // devuelve array vacio si no tiene nada
        .then(itineraries => res.json({success: true, response: itineraries}))
        .catch(err => handleError(res,err))
    },
    getAllItinerariesFromCity: (req, res) =>{
        console.log("Received Get Itineraries F/ City Petition:" + Date())
        Itinerary.find({city:req.params.id}) //.populate('city')
        .then(itineraries => res.json({success: true, response: itineraries}))
        .catch(err => handleError(res, err))
    },
    getAnItinerary:(req, res) =>{
        console.log("Received Get One Itinerary Petition:" + Date())
        Itinerary.findOne({_id: req.params.id}) // me devuelve null si no hay nada
        .then(itinerary => {
            itinerary ? res.json({success: true, response: itinerary}) : res.json({success: false, response: "no itinerary found"})
        })
        .catch(err => handleError(res,err))
    },
    postAnItinerary:(req, res) =>{ // a posteriori hay que validar ésto si tiene opcion un usuario de postear.
        console.log("Received Post Itinerary Petition:" + Date())
        const newItinerary = new Itinerary({...req.body}) // spredeo todas las props que me traen en la petición
        newItinerary.save()
        .then(itinerary => res.json({success: true, response: itinerary}))
        .catch(err => handleError(res,err))
    },
    removeAnItinerary:(req, res) =>{ // busca la ciudad, si la borra devuelve lo que borró, sino null.
        console.log("Received Remove Itinerary Petition:" + Date())
        Itinerary.findOneAndDelete({_id: req.body._id})
        .then(itinerary => {
            itinerary ? res.json({success: true, response: itinerary}) : res.json({success: false, response: "no itinerary found"})
        })
        .catch(err => handleError(res,err))
        // pedir al modelo que elimine la ciudad que requeri.
    },
    modifyAnItinerary:(req, res)=>{ 
        console.log("Received Modify Itinerary Petition:" + Date())
        Itinerary.findOneAndUpdate({_id: req.body._id}, {...req.body}, {new:true}) // busca por el obj parametro, luego obj lo que voy a actualizar. si encuentra devuelve lo que encontró y por param new, el nuevo documento, si no null
        .then(itinerary => {
            itinerary ? res.json({success: true, response: itinerary}) : res.json({success: false, response: "no itinerary found"})
        })
        .catch(err => handleError(res,err))
    },
    likeAnItinerary: (req, res) =>{
        console.log("Received Like An Itinerary Petition:" + Date())
        let foundItinerary =  req.user.likedItineraries.indexOf(req.params.id)
        // let fullItinerary = await Itinerary.findOne({_id : req.params.id})
        User.findOneAndUpdate({_id: req.user._id}, { [`$${foundItinerary !== -1 ? 'pull' : 'push'}`]: { likedItineraries: req.params.id } }, {new:true})
        .then(modifiedUser => {
            Itinerary.findOneAndUpdate({_id: req.params.id}, { $inc: {'likes' : foundItinerary !== -1 ? -1 : 1}})
            .then(() => {
                res.json({success: true, response: modifiedUser.likedItineraries})
            })
        }).catch(err => handleError(res, err))
    }
}
module.exports = itinerariesControllers