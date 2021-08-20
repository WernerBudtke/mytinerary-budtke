const mongoose = require('mongoose')
const authorSchema = new mongoose.Schema({
    name: {type:String, required:true},
    image: {type:String, required:true}
})
const itinerarySchema = new mongoose.Schema({
    author: authorSchema,
    description: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true, min: 1, max: 5},
    duration: {type: Number, required: true},
    likes: {type: Number, required: true, default: 0},
    hashtags: {type: Array, required: true},
    comments: {type: Array},
    city: {type: mongoose.Types.ObjectId, ref:'city', required: true}
    // deberia haber usado cityId, si tuvier  q poner muchas es [{type: mongoose.Types.ObjectId}] de esa manera tengo un arreglo con muchas "activies" por ej
})
const Itinerary = mongoose.model('itinerary', itinerarySchema)
module.exports = Itinerary