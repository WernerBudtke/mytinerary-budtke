import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Header from "../components/Header"
import Footer from "../components/Footer"
const Itineraries = (props) =>{
    // console.log(props.match.params.id)
    const [data, setData] = useState({})
    const [fetching, setFetching] = useState(true)
    useEffect(() => {
        axios.get(`http://192.168.1.2:4000/api/city/${props.match.params.id}`)
        .then(res => setData(res.data.response))
        window.scrollTo(0, 0)
        setFetching(false)
        return () => document.title = "myTinerary"
    },[props.match.params.id])
    if(fetching){
        return <h1>Loading...</h1>
    }
    document.title = `myTinerary - ${data.city}`
    // console.log(data)
    return(
        <>
            <Header/>
            <main>
                <div style={{backgroundImage:`url('/assets/${data.image}')`}}>
                    <h1>Itineraries de id: {data.id}</h1>
                    <p>City: {data.city}</p>
                    <p>Country: {data.country}</p>
                    <p>Descripcion: {data.description}</p>
                    <Link to="/cities">Back to cities</Link>
                </div>
            </main>
            <Footer/>
        </>
    )
}
export default Itineraries