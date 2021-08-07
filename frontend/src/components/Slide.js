const Slide = (props) =>{
    const {datos, actual, anterior, siguiente} = props
    // console.log(datos, actual, anterior, siguiente)
    const esActual = actual && "actual"
    const esAnterior = anterior && "anterior"
    const esSiguiente = siguiente && "siguiente"
    // const esOtro = !actual ? !anterior ? !siguiente ? "otro" : null : null : null
    return(
        <div className={`${esActual || esAnterior || esSiguiente}`}>
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