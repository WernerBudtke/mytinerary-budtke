const mongoose = require('mongoose')
const activitySchema = new mongoose.Schema({
    title: {type: String},
    photo: {type: String},
    itinerary: {type: mongoose.Types.ObjectId, ref:'itinerary', required: true}
})
const Activity = mongoose.model('activity', activitySchema)
module.exports = Activity