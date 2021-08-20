import Header from "../components/Header"
import Footer from "../components/Footer"
import Maincities from "../components/Maincities"
import { useEffect } from "react"
import {connect} from 'react-redux'
import citiesActions from "../redux/actions/citiesActions"
const Cities = (props) =>{
    const {allCities} = props
    useEffect(() => {
        if(allCities.length === 0){
            props.getCities().then(res => {
                if(!res.success){
                    console.error(res.error)
                    props.history.push('/error')
                }
            })
        }
        window.scrollTo(0, 0)
        document.title = "myTinerary - Cities"
        return () => document.title = "myTinerary"
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <>
            <Header/>
            <Maincities {...props}/>
            <Footer/>
        </>
    )
}
const mapStateToProps = (state) =>{
    return{
        allCities : state.citiesRed.cities
    } 
}
const mapDispatchToProps = {
    // propiedadProps : queFuncionMeTrae
    getCities:citiesActions.getAllCities
}

export default connect(mapStateToProps,mapDispatchToProps)(Cities)

