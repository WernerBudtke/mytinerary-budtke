import { useRef, useState, useEffect } from "react"
import Slide from './Slide'
import BotonCarrusel from "./BotonCarrusel"
const Carrusel = () =>{
    const contenidoCarrusel = [
        [
            {id: 1, nombre: "Buenos Aires", pais:"Argentina", imagen: "bsas.jpg"}, 
            {id: 2, nombre: "Rosario", pais:"Argentina", imagen: "rosario.jpg"}, 
            {id: 3, nombre: "Ushuaia", pais:"Argentina", imagen: "ushuaia.jpg"},
            {id: 4, nombre: "Gdro. Baigorria", pais:"Argentina", imagen: "baigorria.jpg"}
        ],
    
        [
            {id: 5, nombre: "Montevideo", pais:"Uruguay", imagen: "montevideo.jpg"}, 
            {id: 6, nombre: "Calafate", pais:"Argentina", imagen: "calafate.jpg"}, 
            {id: 7, nombre: "Roma", pais:"Italy", imagen: "roma.jpg"},
            {id: 8, nombre: "Lima", pais:"Peru", imagen: "lima.jpg"}
        ],

        [
            {id: 9, nombre: "Paris",pais:"France",  imagen: "paris.jpg"}, 
            {id: 10, nombre: "Wittenberg",pais:"Germany", imagen: "wittenberg.jpg"}, 
            {id: 11, nombre: "Berlin",pais:"Germany", imagen: "berlin.jpg"},
            {id: 12, nombre: "Vienna",pais:"Austria", imagen: "viena.jpg"}
        ],
    ]

    const [slide, setSlide] = useState({actual: 1, next: 2, previous: 0})
    const [render, setRender] = useState(false)
    const [moving, setMoving] = useState(false)
    const [direction, setDirection] = useState(false)
    const nextSlide =() => {
        if (moving) {
            return false
        } 
        let estadoSlide = slide.actual === contenidoCarrusel.length-1 ? 0 : slide.actual+1
        let estadoSlide2 = slide.next === contenidoCarrusel.length-1 ? 0 : slide.next+1
        let estadoSlide3 = slide.previous === contenidoCarrusel.length-1 ? 0 : slide.previous+1
        setSlide({actual: estadoSlide, next: estadoSlide2, previous:estadoSlide3})
        // console.log(slide)
    }
    const previousSlide =() => {
        if (moving) {
            return false
        } 
        let estadoSlide = slide.actual === 0 ? contenidoCarrusel.length-1 : slide.actual-1
        let estadoSlide2 = slide.next === 0 ? contenidoCarrusel.length-1 : slide.next-1
        let estadoSlide3 = slide.previous === 0 ? contenidoCarrusel.length-1 : slide.previous-1
        setSlide({actual: estadoSlide, next: estadoSlide2, previous:estadoSlide3})
        // console.log(slide)
    }
    const intervalIdSlideChange = useRef(0);
    const intervalIdSlideMoving = useRef(1);
    const intervalIdDirection = useRef(2);
    // console.log("Valor de ref de timeout inicial " + intervalIdSlideChange.current)
    const limpiarTiempo = () =>{   
        if (!moving && !direction){
            clearInterval(intervalIdSlideChange.current)
            clearInterval(intervalIdSlideMoving.current)
            clearInterval(intervalIdDirection.current)
            console.log("matado intervalos ")
        }
    }
    const limpiarTiempo2 = (intervalo) =>{
        clearInterval(intervalo)
    }

    const reiniciarTiempo = () =>{
        setRender(!render)
    }
   // manejo el pasaje de una slide a otra de forma automatica.
    useEffect(() => {
        if (moving) return
        limpiarTiempo2(intervalIdSlideChange.current)
        intervalIdSlideChange.current = setInterval(() =>{
            nextSlide()
            console.log("cambio slide")
        }, 2000)
        console.log("iniciado el intervalo de automatismo" + intervalIdSlideChange.current)
    },[slide, render])

    
    useEffect(() => {
        limpiarTiempo2(intervalIdSlideMoving.current)
        intervalIdSlideMoving.current = setInterval(() =>{
            setMoving(!moving)
            console.log("cambio movimiento")
        }, 1000)
        console.log("iniciado el intervalo de animacion" + intervalIdSlideMoving.current)
    }, [slide, render])
    
    
    useEffect(() => {
        limpiarTiempo2(intervalIdDirection.current)
        intervalIdDirection.current = setInterval(() =>{
            setDirection(!direction)
            console.log("cambio dir")
        }, 500)
        console.log("iniciado el intervalo de animacion direccion" + intervalIdDirection.current)
    }, [slide, render])
    const goToSlide = (e) =>{
        if(e.target.className.includes("btnActual")){
            return false
        }
        if(e.target.className.includes("btnSiguiente")){
            nextSlide()
        }
        if(e.target.className.includes("btnAnterior")){
            previousSlide()
        }
    }
    const arrayBotonesCar = ["", "", ""]
    return( 
        <div className="carrusel" onMouseEnter={limpiarTiempo} onMouseLeave={reiniciarTiempo}>
            <h2>Popular myTineraries</h2>
            <div className="carruselHandler">
                <button onClick={previousSlide} onMouseEnter={limpiarTiempo}>{'<'}</button>
                <div className="carruselContainer">
                    {contenidoCarrusel.map((slideData, index) => <Slide key={index} datos={slideData} actual={slide.actual === index} anterior={slide.previous === index} siguiente={slide.next === index} moving={moving} direction={direction}/>)}
                </div>
                <button onClick={nextSlide} onMouseEnter={limpiarTiempo}>{'>'}</button>
            </div>
            <div className="botonesAbajoCarrusel">
                {arrayBotonesCar.map((boton, index) => <BotonCarrusel key={index} actual={slide.actual === index} anterior={slide.previous === index} siguiente={slide.next === index} funcion={goToSlide}/>)}
            </div>
        </div>
    )
}
export default Carrusel