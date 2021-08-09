const Slide = (props) =>{
    const {data, actual, previous, next, moving, direction} = props
    // console.log(objects, actual, previous, next)
    const isActual = actual && "actualSlide"
    const isPrevious = previous && "previousSlide"
    const isNext = next && "nextSlide"
    const isMoving = moving ? "slideIsMoving" : "slideIsNotMoving"
    const whatDirection = direction ? "rightMove" : "leftMove"
    // const esOtro = !actual ? !previous ? !next ? "otro" : null : null : null
    return(
        <div className={`${isActual || isPrevious || isNext} ${isMoving} ${moving ? whatDirection : ""}`}>
            {data.map((object)=>{
                return(
                    <div key={object.id} className="citiesCarousel" style={{backgroundImage:`url('./assets/${object.image}')`}}>
                        <div className="infoCitiesCarousel">
                            <p>{object.city}</p>
                            <p>{object.country}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )   
}
export default Slide