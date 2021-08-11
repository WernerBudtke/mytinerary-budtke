import Header from "../components/Header"
import Footer from "../components/Footer"
import Maincities from "../components/Maincities"
import axios from "axios"
import { useEffect, useState } from "react"
const Cities = () =>{
    // ESTO VA PARA EL COMPONENTE CITIES, para que con la respuesta, mapee las ciudades.
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://192.168.1.2:4000/api/cities')
        .then(res => setData(res.data.response))
        window.scrollTo(0, 0)
        document.title = "myTinerary - Cities"
        return () => document.title = "myTinerary"
    },[])
    // CON LA DATA QUE RECIBO, EL FILTRO DEBE UTILIZAR ESA DATA PARA MOSTRAR!
    return(
        <>
            <Header/>
            <Maincities dataApi={data}/>
            <Footer/>
        </>
    )
}
export default Cities