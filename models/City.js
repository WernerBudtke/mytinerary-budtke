const mongoose = require('mongoose')
// genero una nueva instancia de un esquematico
const citySchema = new mongoose.Schema({
    city:{type: String, required: true},
    country:{type: String, required: true},
    description:{type: String, required: true},
    image:{type: String, required: true}
})
//otros tipos de propiedades, default, min chars, etc.
const City = mongoose.model('city', citySchema) // metodo model, 2 param, nombre modelo + cual schema se escribe el nombre en miniscula y singular

module.exports = City