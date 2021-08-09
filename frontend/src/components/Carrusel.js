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
            {id: 7, nombre: "Rome", pais:"Italy", imagen: "roma.jpg"},
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
        let estadoSlideActual = slide.actual === contenidoCarrusel.length-1 ? 0 : slide.actual+1
        let estadoSlideSiguiente = slide.next === contenidoCarrusel.length-1 ? 0 : slide.next+1
        let estadoSlidePrevia = slide.previous === contenidoCarrusel.length-1 ? 0 : slide.previous+1
        setSlide({actual: estadoSlideActual, next: estadoSlideSiguiente, previous:estadoSlidePrevia})
        // console.log(slide)
    }
    const previousSlide =() => {
        if (moving) {
            return false
        } 
        let estadoSlideActual = slide.actual === 0 ? contenidoCarrusel.length-1 : slide.actual-1
        let estadoSlideSiguiente = slide.next === 0 ? contenidoCarrusel.length-1 : slide.next-1
        let estadoSlidePrevia = slide.previous === 0 ? contenidoCarrusel.length-1 : slide.previous-1
        setSlide({actual: estadoSlideActual, next: estadoSlideSiguiente, previous:estadoSlidePrevia})
        // console.log(slide)
    }
    const intervalId = useRef({slideChange: 0, slideMoving: 0, slideDirection: 0});
    // const intervalId = useRe.slideMovingf(1);
    // const intervalIdDirection = useRef(2);
    // console.log("Valor de ref de timeout inicial " + intervalId.current.slideChange)
    const limpiarTiempo = () =>{   
        if (!moving && !direction){
            clearInterval(intervalId.current.slideChange)
            clearInterval(intervalId.current.slideMoving)
            clearInterval(intervalId.current.slideDirection)
            // console.log("matado intervalos ")
        }
    }
    const limpiarTiempo2 = (intervalo) =>{
        clearInterval(intervalo)
    }

    const reiniciarTiempo = () =>{
        setRender(!render)
    }
    useEffect(() => {
        return () => {
            clearInterval(intervalId.current.slideChange)
            clearInterval(intervalId.current.slideMoving)
            clearInterval(intervalId.current.slideDirection)
        }
      }, [])
   // manejo el pasaje de una slide a otra de forma automatica.
    useEffect(() => {
        if (moving){
            return false
        }
        limpiarTiempo2(intervalId.current.slideChange)
        intervalId.current.slideChange = setInterval(() =>{
            nextSlide()
            // console.log("cambio slide")
        }, 2000)
        // console.log("iniciado el intervalo de automatismo" + intervalId.current.slideChange)
    },[slide, render])

    
    useEffect(() => {
        limpiarTiempo2(intervalId.current.slideMoving)
        intervalId.current.slideMoving = setInterval(() =>{
            setMoving(!moving)
            // console.log("cambio movimiento")
        }, 1000)
        // console.log("iniciado el intervalo de animacion" + intervalId.current.slideMoving)
    }, [slide, render])
    
    
    useEffect(() => {
        limpiarTiempo2(intervalId.current.slideDirection)
        intervalId.current.slideDirection = setInterval(() =>{
            setDirection(!direction)
            // console.log("cambio dir")
        }, 500)
        // console.log("iniciado el intervalo de animacion direccion" + intervalId.current.slideDirection)
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
        <div className="carrusel" onMouseEnter={limpiarTiempo} onMouseOver={limpiarTiempo} onMouseLeave={reiniciarTiempo}>
            <h2>Popular myTineraries</h2>
            <div className="carruselHandler">
                <button onClick={previousSlide} onMouseEnter={limpiarTiempo} onMouseOver={limpiarTiempo} onMouseLeave={limpiarTiempo}>{'<'}</button>
                <div className="carruselContainer">
                    {contenidoCarrusel.map((slideData, index) => <Slide key={index} datos={slideData} actual={slide.actual === index} anterior={slide.previous === index} siguiente={slide.next === index} moving={moving} direction={direction}/>)}
                </div>
                <button onClick={nextSlide} onMouseEnter={limpiarTiempo} onMouseOver={limpiarTiempo} onMouseLeave={limpiarTiempo}>{'>'}</button>
            </div>
            <div className="botonesAbajoCarrusel">
                {arrayBotonesCar.map((boton, index) => <BotonCarrusel key={index} actual={slide.actual === index} anterior={slide.previous === index} siguiente={slide.next === index} funcion={goToSlide}/>)}
            </div>
        </div>
    )
}
export default Carrusel