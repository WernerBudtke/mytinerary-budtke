// const dataApi = [
//     {id: 0, city: "Granadero Baigorria", country:"Argentina", image: "baigorria.jpg", description:"Located in Santa Fe province, small town with some beaches"},
//     {id: 1, city: "Rosario", country:"Argentina", image: "rosario.jpg", description:"Located in Santa Fe province, big city at the coast of Paraná River"},
//     {id: 2, city: "Buenos Aires", country:"Argentina", image: "bsas.jpg", description:"Capital city of Argentina, biggest city with a lot of cultural places to go"},
//     {id: 3, city: "Ushuaia", country:"Argentina", image: "ushuaia.jpg", description:"Located at the southest part of the country, a lot of natural marvels"},
//     {id: 4, city: "Calafate", country:"Argentina", image: "calafate.jpg", description:"Tourist town close to Perito Moreno glacier"},
//     {id: 5, city: "Bariloche", country:"Argentina", image: "bariloche.jpg", description:"Tourist town with plenty of things to do"},
//     {id: 6, city: "Pergamino", country:"Argentina", image: "pergamino.jpg", description:"Small town on the way from Rosario to Buenos Aires"},
//     {id: 7, city: "Mar del Plata", country:"Argentina", image: "mardelplata.jpg", description:"Tourist town, really good beaches"},
//     {id: 8, city: "Mar de Ajó", country:"Argentina", image: "mardeajo.jpg", description:"Small tourist town, a little forest with some beaches"},
//     {id: 9, city: "Puerto Madryn", country:"Argentina", image: "madryn.jpg", description:"Small tourist town, water sports and tourism"},
//     {id: 10, city: "Villa Gesell", country:"Argentina", image: "gesell.jpg", description:"Small tourist town, where the youth go to enjoy holidays"},
//     {id: 11, city: "Santa Fe", country:"Argentina", image: "santafe.jpg", description:"Medium sized town, a calm place to stay while you travel around"},
//     {id: 12, city: "Corrientes", country:"Argentina", image:"corrientes.jpg", description:"Hot town, nice parks and cool views"},
//     {id: 13, city: "San Lorenzo", country:"Argentina", image:"sanlorenzo.jpg", description:"Medium sized town, north of Rosario"},
//     {id: 14, city: "Capitán Bermúdez", country:"Argentina", image:"bermudez.jpg", description:"Rural town, north of Baigorria, nice place to visit once"}
// ]
const City = require('../models/City')

const citiesControllers = {
    getAllCities:(req, res) =>{
        City.find()
        .then(cities => res.json({sucess: true, response: cities}))
        .catch(err => res.json({success: false, reason: err}))
    },
    getACity:(req, res) =>{
        // pedir al modelo la ciudad que requiere, devolver a frontend
        City.findOne({_id: req.params.id})
        .then(city => res.json({success: true, response: city}))
        .catch(err => res.json({success: false, reason: err}))
    },
    postACity:(req, res) =>{
        if(req.get("API-KEY") === '1337'){
            if(typeof req.body  !=  typeof undefined){
                console.log("funciono filtro de obj indefinido")
                console.log(typeof req.body)
                console.log(Object.keys(req.body).length) // filtro a ver cuantas props me mandan
                if(Object.keys(req.body).length >= 4){
                    let myValues = Object.values(req.body) // guardo valores del objeto en un array
                    let badValues = myValues.filter(value => typeof value !== "string")
                    if(badValues.length > 0){ 
                        res.json({success: false, reason: "values of keys are not string type"})
                    }else{
                        const newCity = new City({
                            city: req.body.city,
                            country: req.body.country,
                            description: req.body.description,
                            image: req.body.image
                        })
                        newCity.save()
                        .then(city => res.json({success: true, posted: city}))
                        .catch(err => res.json({success: false, reason: err}))
                    }       
                }else{
                    res.json({success: false, reason: "check that you have all needed properties"})
                }       
            }else{
                res.json({success: false, reason: "undefined"})
            }
        }else{
            res.json({success: false, reason: "bad api token"})
        }
    },
    removeACity:(req, res) =>{
        City.findOneAndDelete({_id: req.body.id})
        .then(city => res.json({success: true, removed: city}))
        .catch(err => res.json({success: false, reason: err}))
        // pedir al modelo que elimine la ciudad que requeri.
    },
    modifyACity:(req, res)=>{
        City.findOneAndUpdate({_id: req.body.id}, {...req.body})
        .then(city => res.json({success: true, modified: city}))
        .catch(err => res.json({success: false, reason: err}))
        // Pedirle a la BDD que me modifique lo que frontend pide
    }
}

module.exports = citiesControllers

