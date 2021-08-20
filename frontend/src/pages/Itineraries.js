import { useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Itinerary from "../components/Itinerary"
import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
const Itineraries = (props) =>{
    const {cities, itineraries, error, errorMsg, fetching} = props
    var data = cities.find(city => city._id === props.match.params.id)
    useEffect(() => {
        props.resetItineraries()
        props.getAllItineraries(props.match.params.id) // si esto esta ok, la idea seria quitarle el fetching.
        window.scrollTo(0, 0)
        if(error){
            console.error(errorMsg)
            props.history.push('/error')
        }
        return () => {
            props.resetItineraries()
            document.title = "myTinerary"
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error])
    if(fetching){
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
        document.title = `myTinerary - ${data.city}`
    }
    return(
        <>
            <Header/>
            <main className="mainItinerary">
                <div className="photoItinerary" style={{backgroundImage:`url('/assets/${data.image}')`}}>
                    <h3>In: {data.country} you can...</h3>
                    <h2>{Math.random() > 0.5 ? "Discover" : "Unfold"} the {Math.random() > 0.5 ? "beauty" : "charm"} of: {data.city}</h2>
                </div>
                <div className="shortCityDescription">
                    <p><span className="specialText">Sneak peek:</span> {data.description}</p>
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
        itineraries : state.itinerariesRed.itineraries,
        error: state.itinerariesRed.error,
        errorMsg: state.itinerariesRed.errorMsg,
        fetching: state.itinerariesRed.fetching
    }
}
const mapDispatchToProps = {
    getAllItineraries : itinerariesActions.getAllItinerariesFromCity,
    resetItineraries : itinerariesActions.resetItineraries
}
export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)