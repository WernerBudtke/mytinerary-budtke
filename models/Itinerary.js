const mongoose = require('mongoose')
const itinerarySchema = new mongoose.Schema({
    author: {type: Object, required: true},
    description: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true, min: 1, max: 5},
    duration: {type: Number, required: true},
    likes: {type: Number, required: true, default: 0},
    hashtags: {type: Array, required: true},
    comments: {type: Array},
})
const Itinerary = mongoose.model('itinerary', itinerarySchema)
module.exports = Itinerary