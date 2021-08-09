import { useRef, useState, useEffect } from "react"
import Slide from './Slide'
import BtnCarousel from "./BtnCarousel"
const Carousel = () =>{
    const carouselContent = [
        [
            {id: 1, city: "Buenos Aires", country:"Argentina", image: "bsas.jpg"}, 
            {id: 2, city: "Rosario", country:"Argentina", image: "rosario.jpg"}, 
            {id: 3, city: "Ushuaia", country:"Argentina", image: "ushuaia.jpg"},
            {id: 4, city: "Gdro. Baigorria", country:"Argentina", image: "baigorria.jpg"}
        ],
    
        [
            {id: 5, city: "Montevideo", country:"Uruguay", image: "montevideo.jpg"}, 
            {id: 6, city: "Calafate", country:"Argentina", image: "calafate.jpg"}, 
            {id: 7, city: "Rome", country:"Italy", image: "roma.jpg"},
            {id: 8, city: "Lima", country:"Peru", image: "lima.jpg"}
        ],

        [
            {id: 9, city: "Paris",country:"France",  image: "paris.jpg"}, 
            {id: 10, city: "Wittenberg",country:"Germany", image: "wittenberg.jpg"}, 
            {id: 11, city: "Berlin",country:"Germany", image: "berlin.jpg"},
            {id: 12, city: "Vienna",country:"Austria", image: "viena.jpg"}
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
        let stateActualSlide = slide.actual === carouselContent.length-1 ? 0 : slide.actual+1
        let stateNextSlide = slide.next === carouselContent.length-1 ? 0 : slide.next+1
        let statePreviousSlide = slide.previous === carouselContent.length-1 ? 0 : slide.previous+1
        setSlide({actual: stateActualSlide, next: stateNextSlide, previous:statePreviousSlide})
        // console.log(slide)
    }
    const previousSlide =() => {
        if (moving) {
            return false
        } 
        let stateActualSlide = slide.actual === 0 ? carouselContent.length-1 : slide.actual-1
        let stateNextSlide = slide.next === 0 ? carouselContent.length-1 : slide.next-1
        let statePreviousSlide = slide.previous === 0 ? carouselContent.length-1 : slide.previous-1
        setSlide({actual: stateActualSlide, next: stateNextSlide, previous:statePreviousSlide})
        // console.log(slide)
    }
    const intervalId = useRef({slideChange: 0, slideMoving: 0, slideDirection: 0});
   

    const cleanTimers = () =>{   
        if (!moving && !direction){
            clearInterval(intervalId.current.slideChange)
            clearInterval(intervalId.current.slideMoving)
            clearInterval(intervalId.current.slideDirection)
            // console.log("matado intervalos ")
        }
    }
    const cleanTimers2 = (interval) =>{
        clearInterval(interval)
    }

    const resetTimers = () =>{
        setRender(!render)
    }
    // limpieza de intervalos al desmontar
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
        cleanTimers2(intervalId.current.slideChange)
        intervalId.current.slideChange = setInterval(() =>{
            nextSlide()
            // console.log("cambio slide")
        }, 4000)
        // console.log("iniciado el interval de automatismo" + intervalId.current.slideChange)
    },[slide, render])

    
    useEffect(() => {
        cleanTimers2(intervalId.current.slideMoving)
        intervalId.current.slideMoving = setInterval(() =>{
            setMoving(!moving)
            // console.log("cambio movimiento")
        }, 2000)
        // console.log("iniciado el interval de animacion" + intervalId.current.slideMoving)
    }, [slide, render])
    
    
    useEffect(() => {
        cleanTimers2(intervalId.current.slideDirection)
        intervalId.current.slideDirection = setInterval(() =>{
            setDirection(!direction)
            // console.log("cambio dir")
        }, 1000)
        // console.log("iniciado el interval de animacion direccion" + intervalId.current.slideDirection)
    }, [slide, render])
    const goToSlide = (e) =>{
        if(e.target.className.includes("btnActual")){
            return false
        }
        if(e.target.className.includes("btnNext")){
            nextSlide()
        }
        if(e.target.className.includes("btnPrevious")){
            previousSlide()
        }
    }
    const arrayCarouselBtns = ["", "", ""]
    return( 
        <div className="carousel" onMouseEnter={cleanTimers} onMouseOver={cleanTimers} onMouseLeave={resetTimers}>
            <h2>Popular myTineraries</h2>
            <div className="carouselHandler">
                <button onClick={previousSlide} onMouseEnter={cleanTimers} onMouseOver={cleanTimers} onMouseLeave={cleanTimers}>{'<'}</button>
                <div className="carouselContainer">
                    {carouselContent.map((slideData, index) => <Slide key={index} data={slideData} actual={slide.actual === index} previous={slide.previous === index} next={slide.next === index} moving={moving} direction={direction}/>)}
                </div>
                <button onClick={nextSlide} onMouseEnter={cleanTimers} onMouseOver={cleanTimers} onMouseLeave={cleanTimers}>{'>'}</button>
            </div>
            <div className="btnsDownCarousel">
                {arrayCarouselBtns.map((btn, index) => <BtnCarousel key={index} actual={slide.actual === index} previous={slide.previous === index} next={slide.next === index} myFunction={goToSlide}/>)}
            </div>
        </div>
    )
}
export default Carousel