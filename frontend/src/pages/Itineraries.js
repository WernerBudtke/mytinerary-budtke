import { useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Itinerary from "../components/Itinerary"
import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
import citiesActions from "../redux/actions/citiesActions"
const Itineraries = (props) =>{
    const {cities, itineraries,fetchingItineraries, city, fetchingCity} = props
    let data = cities.length > 0 ? cities.find(city => city._id === props.match.params.id) : null
    const errorHandler = (res) =>{
        if(!res.success){
            console.error(res.error)
            props.history.push('/error')
        }
    }
    useEffect(() => {
        if(data){
            props.getAllItineraries(props.match.params.id).then(res => errorHandler(res))
        }else{
            props.getACity(props.match.params.id).then(res => errorHandler(res))
            props.getAllItineraries(props.match.params.id).then(res => errorHandler(res))
        } 
        window.scrollTo(0, 0)
        return () => {
            props.resetItineraries()
            props.resetCity()
            document.title = "myTinerary"
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const dataHandler = (string) =>{
        return data ? data[string] : city[string]
    }
    if(fetchingItineraries && fetchingCity){
        return (
            <>  
                <Header/>
                <main className="mainCities">
                    <div className="noCitiesContainer"><p>Loading...</p></div>
                </main>
                <Footer/>
            </>
        )
    }else{
        document.title = `myTinerary - ${dataHandler("city")}`
    }
    return(
        <>
            <Header/>
            <main className="mainItinerary">
                <div className="photoItinerary" style={{backgroundImage:`url('/assets/${dataHandler("image")}')`}}>
                    <h3>In: {dataHandler("country")} you can...</h3>
                    <h2>{Math.random() > 0.5 ? "Discover" : "Unfold"} the {Math.random() > 0.5 ? "beauty" : "charm"} of: {dataHandler("city")}</h2>
                </div>
                <div className="shortCityDescription">
                    <p><span className="specialText">Sneak peek:</span> {dataHandler("description")}</p>
                </div>
                <div className="itinerariesContainer">{itineraries.length === 0 ? <p className="noItineraries">OOPS, NO ITINERARIES YET IN THIS CITY!</p> : itineraries.map((itinerary, index) => <Itinerary key={index} itinerary={itinerary}/>)}</div>
                <Link to="/cities"><button>Back to cities</button></Link>
            </main>
            <Footer/>
        </>
    )
}
const mapStateToProps = (state) =>{
    return{
        cities : state.citiesRed.cities,
        city : state.citiesRed.city,
        itineraries : state.itinerariesRed.itineraries,
        fetchingItineraries: state.itinerariesRed.fetching,
        fetchingCity: state.citiesRed.fetchingCity
    }
}
const mapDispatchToProps = {
    getAllItineraries : itinerariesActions.getAllItinerariesFromCity,
    resetItineraries : itinerariesActions.resetItineraries,
    getACity : citiesActions.getACity,
    resetCity : citiesActions.resetCity
}
export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)