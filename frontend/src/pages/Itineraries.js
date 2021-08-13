import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Header from "../components/Header"
import Footer from "../components/Footer"
const Itineraries = (props) =>{
    const [data, setData] = useState({city: " ", country:" ", image:" ", description:" "})
    const [fetching, setFetching] = useState(true)
    useEffect(() => {
        axios.get(`http://192.168.1.2:4000/api/city/${props.match.params.id}`)
        .then(res => {
            if(res.data.success){
                setData(res.data.response)
                setFetching(false)
            }else{
                throw new Error("didn't found that city")
            }
        })
        .catch(err => { // catch para el error comunicacion con backend
            console.error(err)
            props.history.push('/error')
        })
        window.scrollTo(0, 0)
        return () => document.title = "myTinerary"
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
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
                <div className="itinerariesContainer"><h1>Under construction</h1></div>
                <Link to="/cities"><button>Back to cities</button></Link>
            </main>
            <Footer/>
        </>
    )
}
export default Itineraries