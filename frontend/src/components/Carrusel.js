import { useRef, useState, useEffect } from "react"
import Slide from './Slide'
const Carrusel = () =>{
    const contenidoCarrusel = [
        [
            {id: 1, nombre: "Buenos Aires", pais:"Argentina", imagen: "bsas.jpg"}, 
            {id: 2, nombre: "Buenos Aires", pais:"Argentina", imagen: "lima.jpg"}, 
            {id: 3, nombre: "Buenos Aires", pais:"Argentina", imagen: "roma.jpg"},
            {id: 4, nombre: "Buenos Aires", pais:"Argentina", imagen: "montevideo.jpg"}
        ],
    
        [
            {id: 5, nombre: "Lima", pais:"Perú", imagen: "montevideo.jpg"}, 
            {id: 6, nombre: "Lima", pais:"Perú", imagen: "bsas.jpg"}, 
            {id: 7, nombre: "Lima", pais:"Perú", imagen: "roma.jpg"},
            {id: 8, nombre: "Lima", pais:"Perú", imagen: "lima.jpg"}
        ],

        [
            {id: 9, nombre: "Montevideo",pais:"Uruguay",  imagen: "montevideo.jpg"}, 
            {id: 10, nombre: "Montevideo",pais:"Uruguay", imagen: "montevideo.jpg"}, 
            {id: 11, nombre: "Montevideo",pais:"Uruguay", imagen: "montevideo.jpg"},
            {id: 12, nombre: "Montevideo",pais:"Uruguay", imagen: "montevideo.jpg"}
        ],
    ]

    const [slide, setSlide] = useState({actual: 1, next: 2, previous: 0})
    const [render, setRender] = useState(false)
    const nextSlide =() => {
        let estadoSlide = slide.actual === contenidoCarrusel.length-1 ? 0 : slide.actual+1
        let estadoSlide2 = slide.next === contenidoCarrusel.length-1 ? 0 : slide.next+1
        let estadoSlide3 = slide.previous === contenidoCarrusel.length-1 ? 0 : slide.previous+1

        setSlide({actual: estadoSlide, next: estadoSlide2, previous:estadoSlide3})
        // console.log(slide)
    }
    const previousSlide =() => {
        let estadoSlide = slide.actual === 0 ? contenidoCarrusel.length-1 : slide.actual-1
        let estadoSlide2 = slide.next === 0 ? contenidoCarrusel.length-1 : slide.next-1
        let estadoSlide3 = slide.previous === 0 ? contenidoCarrusel.length-1 : slide.previous-1
        setSlide({actual: estadoSlide, next: estadoSlide2, previous:estadoSlide3})
        // console.log(slide)
    }
    const timeoutId = useRef(0);
    // console.log("Valor de ref de timeout inicial " + timeoutId.current)

    const limpiarTiempo = () =>{    
        clearInterval(timeoutId.current)
        console.log("matado intervalo " + timeoutId.current)
    }
    const reiniciarTiempo = () =>{
        setRender(!render)
    }
    useEffect(() => {
        limpiarTiempo()
        timeoutId.current = setInterval(() =>{
            nextSlide()
        }, 4000)
        console.log("iniciado el intervalo" + timeoutId.current)
    },[slide, render])

    return( 
        <div className="carrusel" onMouseEnter={limpiarTiempo} onMouseLeave={reiniciarTiempo}>
            <h2>Popular myTineraries</h2>
            <div className="carruselHandler">
                <button onClick={previousSlide} onMouseOver={limpiarTiempo}>{'<'}</button>
                <div className="carruselContainer">
                    {contenidoCarrusel.map((slideData, index) => <Slide key={index} datos={slideData} actual={slide.actual === index} anterior={slide.previous === index} siguiente={slide.next === index}/>)}
                </div>
                <button onClick={nextSlide} onMouseOver={limpiarTiempo}>{'>'}</button>
            </div>
        </div>
    )
}
export default Carrusel