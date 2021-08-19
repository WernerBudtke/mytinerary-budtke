import Header from "../components/Header"
import Footer from "../components/Footer"
import Maincities from "../components/Maincities"
import axios from "axios"
import { useEffect, useState } from "react"
import {connect} from 'react-redux'
import citiesActions from "../redux/actions/citiesActions"
const Cities = (props) =>{
    // ESTO VA PARA EL COMPONENTE CITIES, para que con la respuesta, mapee las ciudades.
    useEffect(() => {
        props.getCities()
        window.scrollTo(0, 0)
        document.title = "myTinerary - Cities"
        return () => document.title = "myTinerary"
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    // CON LA DATA QUE RECIBO, EL FILTRO DEBE UTILIZAR ESA DATA PARA MOSTRAR!
    return(
        <>
            <Header/>
            <Maincities/>
            <Footer/>
        </>
    )
}
const mapDispatchToProps = {
    // propiedadProps : queFuncionMeTrae
    getCities:citiesActions.getAllCities
}

export default connect(null,mapDispatchToProps)(Cities)

