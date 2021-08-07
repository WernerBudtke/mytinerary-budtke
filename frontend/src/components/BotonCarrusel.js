const BotonCarrusel = (props) =>{
    const {actual, anterior, siguiente, funcion} = props
    const esActual = actual && "btnActual"
    const esAnterior = anterior && "btnAnterior"
    const esSiguiente = siguiente && "btnSiguiente"
    return(
        <p onClick={funcion} className={`btnCarrusel ${esActual || esAnterior || esSiguiente}`}>-</p>
    )
}
export default BotonCarrusel