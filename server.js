const express = require('express')
// uso require para importar express
const cors = require('cors')
// USO CORS PARA PERMITIR ORIGEN CRUZADO
// USO DOTENV PARA TENER VARIABLES DE ENTORNO
require('dotenv').config()
const app = express()  // creo una instancia de Express (createApplication())
// dentro de app, vive el resultado de ejecutar el createApplication de express, me da un servidor listo para levantar

// FILTRO MIDDLEWARE, antes de usar mi aplicación, uso el filtro. Para que pueda responder de origen cruzado
app.use(cors())
const pruebaDotEnv = {
    username: process.env.MAILUSER,
    password: process.env.MAILPASS
}
const dataApi = [
    {id: 0, city: "Granadero Baigorria", country:"Argentina", image: "baigorria.jpg", description:"Al norte de Rosario, donde viven los viejos"},
    {id: 1, city: "Rosario", country:"Argentina", image: "rosario.jpg", description:"La capital no oficial de Argentina, ciudad Juarez Argentina"},
    {id: 2, city: "Buenos Aires", country:"Argentina", image: "bsas.jpg", description:"La capital de Argentina, donde Larreta pone y saca pisos"},
    {id: 3, city: "Ushuaia", country:"Argentina", image: "ushuaia.jpg", description:"El pais de las maravillas naturales y electrodomesticos"},
    {id: 4, city: "Calafate", country:"Argentina", image: "calafate.jpg", description:"Donde vive la Presidente de la Nación"},
    {id: 5, city: "Bariloche", country:"Argentina", image: "bariloche.jpg", description:"Donde los pibes se van de joda, igual lindo paisaje"},
    {id: 6, city: "Pergamino", country:"Argentina", image: "pergamino.jpg", description:"Entre Rosario y Buenos Aires"},
    {id: 7, city: "Mar del Plata", country:"Argentina", image: "mardelplata.jpg", description:"Donde vas a tomar sol"},
    {id: 8, city: "Mar de Ajó", country:"Argentina", image: "mardeajo.jpg", description:"El mar huele bastante bien, pese a su nombre"},
    {id: 9, city: "Puerto Madryn", country:"Argentina", image: "madryn.jpg", description:"Donde se puede avistar ballenas"},
    {id: 10, city: "Villa Gesell", country:"Argentina", image: "gesell.jpg", description:"Donde van los pibes en verano"},
    {id: 11, city: "Santa Fe", country:"Argentina", image: "santafe.jpg", description:"La capital oficial de la provincia de Santa Fe"},
    {id: 12, city: "Corrientes", country:"Argentina", image:"corrientes.jpg", description:"Donde nació Henry y dice que hace calor"},
    {id: 13, city: "San Lorenzo", country:"Argentina", image:"sanlorenzo.jpg", description:"No confundir con el club de fútbol, aquí fue el combate de San Lorenzo"},
    {id: 14, city: "Capitán Bermúdez", country:"Argentina", image:"bermudez.jpg", description:"La fábrica de Verbano, muy buena porcelana"}
]
// const contenidoRespuesta = [pruebaDotEnv, "blablabla"]
app.get('/prueba/datos', (req, res) =>{
    res.json({response: dataApi})
    console.log("recibi un pedido")
})

app.listen(4000, () => console.log("Server listening on port 4000")) // que comienze a escuchar en puerto 4000, una vez escuchado ejecutar función
