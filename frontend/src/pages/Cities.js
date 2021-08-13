import Header from "../components/Header"
import Footer from "../components/Footer"
import Maincities from "../components/Maincities"
import axios from "axios"
import { useEffect, useState } from "react"
const Cities = (props) =>{
    // ESTO VA PARA EL COMPONENTE CITIES, para que con la respuesta, mapee las ciudades.
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://192.168.1.2:4000/api/cities')
        .then(res => {
            if(res.data.response.length > 0){
                setData(res.data.response) 
            } 
            else{
                throw new Error("no cities found in db")
            }
        })
        .catch(err => {
            console.error(err)
            props.history.push('/error')
        })
        window.scrollTo(0, 0)
        document.title = "myTinerary - Cities"
        return () => document.title = "myTinerary"
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
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