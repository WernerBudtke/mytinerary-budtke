import {useEffect} from "react"
import { Link } from "react-router-dom"
import CitiesInput from "./CitiesInput"
import City from "./City"
import {connect} from 'react-redux'
const Maincities = (props) => {
    const {dataApi, filteredCities, fetching, error, errorMsg} = props
    // const [fetching, setFetching] = useState(true)
    useEffect(() =>{
        if(error){
            console.log(errorMsg)
            props.history.push('/error')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error])
    if(fetching){
        return <main className="mainCities"><div className="noCitiesContainer"><p>Loading...</p></div></main>
    }
    let dataToShow = []
    dataToShow = filteredCities.length > 0 ? filteredCities : dataApi
    return (
        <main className="mainCities" >
            <CitiesInput/>
            <div className="cardCitiesContainer" style={filteredCities.length > 0 ? {display:"flex"} : {display:"none"}}>
                {dataToShow.map(city => <Link key={city._id} to={`/itineraries/${city._id}`}><City key={city._id} cityName={city.city} country={city.country} image={city.image} description={city.description}/></Link>)}
            </div>
            <div className="noCitiesContainer" style={filteredCities.length === 0 ? {display:"block"} : {display:"none"}}>
                <p>UNABLE TO FIND THAT ONE, TRY AGAIN!</p>
            </div>
        </main>
    )
}

const mapStateToProps = (state) =>{
    return {
        dataApi : state.citiesRed.cities,
        filteredCities : state.citiesRed.filteredCities,
        fetching: state.citiesRed.fetching,
        error: state.citiesRed.error,
        errorMsg: state.citiesRed.errorMsg
    }
}

export default connect(mapStateToProps)(Maincities)
// componente de orden superior, funcion recibe param otra func.