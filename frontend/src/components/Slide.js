const Slide = (props) =>{
    const {datos, actual, anterior, siguiente, moving, direction} = props
    // console.log(datos, actual, anterior, siguiente)
    const esActual = actual && "actual"
    const esAnterior = anterior && "anterior"
    const esSiguiente = siguiente && "siguiente"
    const seMueve = moving ? "seMueve" : "noSeMueve"
    const direccion = direction ? "derecha" : "izquierda"
    // const esOtro = !actual ? !anterior ? !siguiente ? "otro" : null : null : null
    return(
        <div className={`${esActual || esAnterior || esSiguiente} ${seMueve} ${moving ? direccion : ""}`}>
            {datos.map((dato)=>{
                return(
                    <div key={dato.id} className="ciudadesCarrusel" style={{backgroundImage:`url('./assets/${dato.imagen}')`}}>
                        <div className="nombresCiudadesCarrusel">
                            <p>{dato.nombre}</p>
                            <p>{dato.pais}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )   
}
export default Slide