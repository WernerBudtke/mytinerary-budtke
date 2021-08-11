const dataApi = [
    {id: 0, city: "Granadero Baigorria", country:"Argentina", image: "baigorria.jpg", description:"Located in Santa Fe province, small town with some beaches"},
    {id: 1, city: "Rosario", country:"Argentina", image: "rosario.jpg", description:"Located in Santa Fe province, big city at the coast of Paraná River"},
    {id: 2, city: "Buenos Aires", country:"Argentina", image: "bsas.jpg", description:"Capital city of Argentina, biggest city with a lot of cultural places to go"},
    {id: 3, city: "Ushuaia", country:"Argentina", image: "ushuaia.jpg", description:"Located at the southest part of the country, a lot of natural marvels"},
    {id: 4, city: "Calafate", country:"Argentina", image: "calafate.jpg", description:"Tourist town close to Perito Moreno glacier"},
    {id: 5, city: "Bariloche", country:"Argentina", image: "bariloche.jpg", description:"Tourist town with plenty of things to do"},
    {id: 6, city: "Pergamino", country:"Argentina", image: "pergamino.jpg", description:"Small town on the way from Rosario to Buenos Aires"},
    {id: 7, city: "Mar del Plata", country:"Argentina", image: "mardelplata.jpg", description:"Tourist town, really good beaches"},
    {id: 8, city: "Mar de Ajó", country:"Argentina", image: "mardeajo.jpg", description:"Small tourist town, a little forest with some beaches"},
    {id: 9, city: "Puerto Madryn", country:"Argentina", image: "madryn.jpg", description:"Small tourist town, water sports and tourism"},
    {id: 10, city: "Villa Gesell", country:"Argentina", image: "gesell.jpg", description:"Small tourist town, where the youth go to enjoy holidays"},
    {id: 11, city: "Santa Fe", country:"Argentina", image: "santafe.jpg", description:"Medium sized town, a calm place to stay while you travel around"},
    {id: 12, city: "Corrientes", country:"Argentina", image:"corrientes.jpg", description:"Hot town, nice parks and cool views"},
    {id: 13, city: "San Lorenzo", country:"Argentina", image:"sanlorenzo.jpg", description:"Medium sized town, north of Rosario"},
    {id: 14, city: "Capitán Bermúdez", country:"Argentina", image:"bermudez.jpg", description:"Rural town, north of Baigorria, nice place to visit once"}
]


const citiesControllers = {
    getAllCities:(req, res) =>{
        res.json({response: dataApi})
        console.log("recibi un pedido a las: " + new Date())
    },
    getACity:(req, res) =>{
        res.json({response: dataApi.find(city => city.id === parseInt(req.params.id))})
        console.log("Recibi pedido de invitado")
    },
    postACity:(req, res) =>{
        req.body.id = dataApi.length === 0 ? 0 : dataApi[dataApi.length - 1].id + 1  // asigno nuevo ID
        dataApi.push(req.body)
        console.log(dataApi)
        res.json({success: true}) // LO QUE LE RESPONDO A QUIEN ME HACE EL POST, UN OBJETO DONDE SU PROPIEDAD SUCESS QUE ES LO QUE ESTOY ESPERANDO, VALOR TRUE
    }
}

module.exports = citiesControllers