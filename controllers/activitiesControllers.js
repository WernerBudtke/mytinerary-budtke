const Activity = require('../models/Activity')
const handleError = (res,err) =>{
    console.log(err.message)
    res.json({success: false, response: err.message})
}

const activitiesControllers = {
    postAnActivity:(req, res) =>{ // a posteriori hay que validar ésto si tiene opcion un usuario de postear.
        console.log("Received Post Activity Petition:" + Date())
        const newActivity = new Activity({...req.body}) // spredeo todas las props que me traen en la petición
        newActivity.save()
        .then(activity => res.json({success: true, response: activity}))
        .catch(err => handleError(res,err))
    },
    getAllActivitiesFromItinerary: (req, res) =>{
        console.log("Received Get Activities F/ Itineraries Petition:" + Date())
        Activity.find({itinerary:req.params.id})
        .then(activity => res.json({success: true, response: activity}))
        .catch(err => handleError(res, err))
    },
}
module.exports = activitiesControllers