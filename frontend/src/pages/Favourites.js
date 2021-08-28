import { useEffect, useState } from "react"
import { connect } from "react-redux"
import Footer from "../components/Footer"
import Header from "../components/Header"
import userActions from "../redux/actions/userActions"
import { Link } from "react-router-dom"
const Favourites = (props) =>{
    const [render, setRender] = useState(false)
    const {likedItineraries} = props
    useEffect(()=>{
        document.title = "myTinerary - Favourites"
        props.populateItineraries(props.token)
        .then(res =>{
            console.log(res)
            setRender(!render)
        })
        console.log(likedItineraries)
        return () => document.title = "myTinerary"
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    if(!render){
        return(
            <>
                <Header/>
                <main className="mainCities"><div className="noCitiesContainer"><p>Loading...</p></div></main>
                <Footer/>
            </>
        )
    }
    return(
        <>
            <Header/>
            <main className="favItiMain">
                {likedItineraries.map(itinerary => {
                    return(
                        <Link key={itinerary._id} to={`/itineraries/${itinerary.city._id}`}>
                            <div className="favItiContainer">
                                <div className="favItiHeader" style={{backgroundImage:`url('assets/${itinerary.city.image}')`}}>
                                    <p>Country: {itinerary.city.country}</p>
                                    <p>City: {itinerary.city.city}</p>
                                    <p>Description: {itinerary.city.description}</p>
                                </div>
                                <div className="favItiContent">
                                    <p>Title: {itinerary.title}</p>
                                    <p>Author: {itinerary.author.name}</p>
                                    <p>Description: {itinerary.description}</p>
                                </div>
                            </div>
                        </Link>
                    ) 
                })}
            </main>
            <Footer/>
        </>
    )
}
const mapStateToProps = (state) =>{
    return {
      likedItineraries: state.usersRed.likedItineraries,
      token: state.usersRed.token
    }
}
const mapDispatchToProps = {
    populateItineraries: userActions.populateItineraries
}
export default connect(mapStateToProps, mapDispatchToProps)(Favourites)