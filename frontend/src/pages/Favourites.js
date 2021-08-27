import { useEffect, useState } from "react"
import { connect } from "react-redux"
import Footer from "../components/Footer"
import Header from "../components/Header"
import userActions from "../redux/actions/userActions"
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
            <main>
                <h1>Loading.... please wait!</h1>
            </main>
            <Footer/>
            </>
        )
    }
    return(
        <>
            <Header/>
            <main>
                {likedItineraries.map(itinerary => {
                    return(
                        <div key={itinerary._id}>
                        <p>City: {itinerary.city.city}</p>
                        <p>Country: {itinerary.city.country}</p>
                        <p>Description: {itinerary.city.description}</p>
                        <p>Title: {itinerary.title}</p>
                        <p>Author: {itinerary.author.name}</p>
                        <p>Iti Description: {itinerary.description}</p>
                        <div>
                            {itinerary.hashtags.map((hashtag,index) => <p key={index}>{hashtag}</p>)}
                        </div>
                        <p>Price: {itinerary.price}</p>
                        <p>Likes: {itinerary.likes}</p>
                    </div>
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