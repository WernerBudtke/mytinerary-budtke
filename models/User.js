const mongoose = require('mongoose')
const personSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
})
const userSchema = new mongoose.Schema({
    name: personSchema,
    password: {type: String, required: true},
    eMail: {type: String, required: true, unique: true},
    photoURL: {type: String, required: true},
    country: {type: String, required: true},
    likedItineraries: [{type: mongoose.Types.ObjectId, ref:'itinerary'}],
    // para q cuando toque usuario pueda popular sus itinerarios favoritos, de ahi popular propiedad ciudad. para que pueda incluso hasta filtrar por city.
    admin: {type: Boolean, default: false},
    google: {type: Boolean, default: false}
})
const User = mongoose.model('user', userSchema)
module.exports = User