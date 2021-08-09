const BtnCarousel = (props) =>{
    const {actual, previous, next, myFunction} = props
    const isActual = actual && "btnActual"
    const isPrevious = previous && "btnPrevious"
    const isNext = next && "btnNext"
    return(
        <p onClick={myFunction} className={`btnCarousel ${isActual || isPrevious || isNext}`}>-</p>
    )
}
export default BtnCarousel