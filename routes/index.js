const express = require('express')
const passport = require('passport')
const validatorControllers = require('../controllers/validatorControllers')
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
router.route('/itinerary/id/:id')
.get(itinerariesControllers.getAnItinerary)
router.route('/itinerary/:id')
.get(itinerariesControllers.getAllItinerariesFromCity)
// router.route('/itinerary/comments/:id')
// .get(itinerariesControllers.getCommentsFromItinerary)
router.route('/additinerary')
.post(itinerariesControllers.postAnItinerary)
router.route('/modifyanitinerary')
.put(itinerariesControllers.modifyAnItinerary)
router.route('/deleteanitinerary')
.delete(itinerariesControllers.removeAnItinerary)
router.route('/itinerary/comments')
.put(
    passport.authenticate('jwt', {session:false}),
    itinerariesControllers.updateComments
)


const userControllers = require('../controllers/userControllers')
router.route('/user/register')
.post(
    validatorControllers.validatorSignUp,
    userControllers.registerUser
)
router.route('/user/login')
.post(userControllers.logUser)
router.route('/users/')
.delete(userControllers.removeUser)
router.route('/user/valid')
.get(
    passport.authenticate('jwt', {session: false}),
    userControllers.isValidUser
)
router.route('/user/validowner')
.get(
    passport.authenticate('jwt', {session: false}),
    userControllers.isThisUserTheOwner
)
router.route('/user/like/:id')
.put(
    passport.authenticate('jwt', {session: false}), 
    itinerariesControllers.likeAnItinerary
)
router.route('/user/favourites')
.get(
    passport.authenticate('jwt', {session: false}),
    userControllers.populateItineraries
)

const activitiesControllers = require('../controllers/activitiesControllers')
router.route('/activity/add')
.post(activitiesControllers.postAnActivity)
router.route('/activity/:id')
.get(activitiesControllers.getAllActivitiesFromItinerary)

module.exports = router