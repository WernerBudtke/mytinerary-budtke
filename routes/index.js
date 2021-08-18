const express = require('express')
// Tengo que generar un enrutador, recibirá todos los pedidos a la API.
// Depende la ruta y el pedido, llama diferente controlador.
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
router.route('/cities') // cuando le pegue a tal ruta con tal metodo.
.get(citiesControllers.getAllCities)
router.route('/city/:id')
.get(citiesControllers.getACity)
router.route('/addcityofcities')
.post(citiesControllers.postACity)
router.route('/deleteacity')
.delete(citiesControllers.removeACity)
router.route('/modifyacity')
.put(citiesControllers.modifyACity)
const itinerariesControllers = require('../controllers/itinerariesControllers')
router.route('/itineraries')
.get(itinerariesControllers.getAllItineraries)
router.route('/itinerary/:id')
.get(itinerariesControllers.getAnItinerary)
// hacer una ruta para traer todos los de una ciudad en particular?
router.route('/additinerary')
.post(itinerariesControllers.postAnItinerary)
router.route('/modifyanitinerary')
.put(itinerariesControllers.modifyAnItinerary)
router.route('/deleteanitinerary')
.delete(itinerariesControllers.removeAnItinerary)
module.exports = router