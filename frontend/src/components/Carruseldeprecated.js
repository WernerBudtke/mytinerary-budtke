import { useRef, useState, useEffect } from "react"
const Carrusel = () =>{
    const contenidoCarrusel = [{nombre: "Buenos Aires", pais:"Argentina", imagen: "bsas.jpg"}, {nombre: "Lima", pais:"Perú", imagen: "lima.jpg"}, {nombre: "Montevideo", pais:"Uruguay", imagen: "montevideo.jpg"}, {nombre: "Roma", pais:"Italia", imagen: "roma.jpg"}]
    const contenidoCarrusel2 = [{nombre: "Santa Fe", pais:"Argentina", imagen: "bsas.jpg"}, {nombre: "Lima", pais:"Perú", imagen: "lima.jpg"}, {nombre: "Montevideo", pais:"Uruguay", imagen: "montevideo.jpg"}, {nombre: "Roma", pais:"Italia", imagen: "roma.jpg"}]
    const contenidoCarrusel3 = [{nombre: "Chubut", pais:"Argentina", imagen: "bsas.jpg"}, {nombre: "Lima", pais:"Perú", imagen: "lima.jpg"}, {nombre: "Montevideo", pais:"Uruguay", imagen: "montevideo.jpg"}, {nombre: "Roma", pais:"Italia", imagen: "roma.jpg"}]
    const contenidoCarrusel4 = [{nombre: "Rosario", pais:"Argentina", imagen: "bsas.jpg"}, {nombre: "Lima", pais:"Perú", imagen: "lima.jpg"}, {nombre: "Montevideo", pais:"Uruguay", imagen: "montevideo.jpg"}, {nombre: "Roma", pais:"Italia", imagen: "roma.jpg"}]
    console.log("Se montó el carrusel")
    const [slide, setSlide] = useState(1)
    const nextSlide =() => {
        let estadoSlide = slide === contenidoCarrusel.length-1 ? 0 : slide+1
        setSlide(estadoSlide)
    }
    const previousSlide =() => {
        let estadoSlide = slide === 0 ? contenidoCarrusel.length-1 : slide-1
        setSlide(estadoSlide)
    }
    const timeoutId = useRef(0);
    const limpiarTiempo = () =>{
        // console.log("antes de la kill " + timeoutId.current)
        clearInterval(timeoutId.current)
        // console.log("post kill " + timeoutId.current)
    }
    
    console.log("Valor de ref de timeout inicial " + timeoutId.current)
    // useEffect(()=>{
    //     clearInterval(timeoutId.current)
    //     console.log("Inicio intervalo")
    //     timeoutId.current = setInterval(() =>{
    //         nextSlide()
    //     }, 3000)
    //     console.log("valor de ref post timeout " + timeoutId.current)
    // },[slide])
    useEffect(
        () => {
            // limpiarTiempo()
            timeoutId.current = setInterval(() =>{
                nextSlide()
            }, 5000)
            console.log("montado")
            return () => limpiarTiempo()
        },
        [slide]
      )
    // const outHandler = (e) =>{
    //     console.log(e.target)
    //     let resultado = e.target.className == "carrusel" ? "sali del carrusel" : ""
    //     console.log(resultado)
    // }
    // useEffect(() => {
    //       console.log("cleaned up");
    //       limpiarTiempo()
    //   }, [])
    
    return( 
        <div className="carrusel" onMouseOver={limpiarTiempo} onMouseOut={limpiarTiempo}>
            <h2>Popular myTineraries</h2>
            <div className="carruselHandler">
                <button onClick={previousSlide} onMouseOver={limpiarTiempo}>{'<'}</button>
                <div className="carruselContainer" onMouseEnter={limpiarTiempo}>
                    <div className="ciudadesCarrusel" style={{backgroundImage:`url('./assets/${contenidoCarrusel[slide]["imagen"]}')`}}>
                        <div className="nombresCiudadesCarrusel">
                            <p>{contenidoCarrusel[slide]["nombre"]}</p>
                            <p>{contenidoCarrusel[slide]["pais"]}</p>
                        </div>
                    </div>
                    <div className="ciudadesCarrusel" style={{backgroundImage:`url('./assets/${contenidoCarrusel2[slide]["imagen"]}')`}}>
                        <div className="nombresCiudadesCarrusel">
                            <p>{contenidoCarrusel2[slide]["nombre"]}</p>
                            <p>{contenidoCarrusel2[slide]["pais"]}</p>
                        </div>
                    </div>
                    <div className="ciudadesCarrusel" style={{backgroundImage:`url('./assets/${contenidoCarrusel3[slide]["imagen"]}')`}}>
                        <div className="nombresCiudadesCarrusel">
                            <p>{contenidoCarrusel3[slide]["nombre"]}</p>
                            <p>{contenidoCarrusel3[slide]["pais"]}</p>
                        </div>
                    </div>
                    <div className="ciudadesCarrusel" style={{backgroundImage:`url('./assets/${contenidoCarrusel4[slide]["imagen"]}')`}}>
                        <div className="nombresCiudadesCarrusel">
                            <p>{contenidoCarrusel4[slide]["nombre"]}</p>
                            <p>{contenidoCarrusel4[slide]["pais"]}</p>
                        </div>
                    </div>
                </div>
                <button onClick={nextSlide} onMouseOver={limpiarTiempo}>{'>'}</button>
            </div>
        </div>
    )
}
export default Carrusel