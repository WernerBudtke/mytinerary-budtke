const express = require('express')
// Tengo que generar un enrutador, recibirá todos los pedidos a la API.
// Depende la ruta y el pedido, llama diferente controlador.
const router = express.Router()
const controllers = require('../controllers/citiesControllers')
router.route('/cities') // cuando le pegue a tal ruta con tal metodo.
.get(controllers.getAllCities)
router.route('/city/:id')
.get(controllers.getACity)
router.route('/addcityofcities')
.post(controllers.postACity)

module.exports = router