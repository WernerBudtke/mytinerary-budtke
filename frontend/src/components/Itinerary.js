import { useState } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
const Itinerary = (props) =>{
    // console.log(props.itinerary)
    const {author, description, hashtags, price, duration, likes, title, _id} = props.itinerary
    // console.log(_id)
    const [render, setRender] = useState(false)
    const [disabled, setDisabled] = useState(false)
    // const [heart, setHeart] = useState(false)
    const clickHandler = (e) =>{
        e.target.innerText = e.target.innerText === "View more" ? 'View less' : 'View more'
        setRender(!render)
    }
    const priceHandler = ()=>{
        let arrayPrice = []
        for(let i = 0; i < price; i++){
            arrayPrice.push('💵')
        }
        return arrayPrice.map((dollar, index) => <p key={index}>{dollar}</p>)
    }
    const heartHandler = (e) =>{
        if(disabled){
            return
        }
        if(!props.token){
            return
        }
        setDisabled(true)
        props.likeAnItinerary(_id, props.token)
        .then((res) => {
            if(res.success){
                setDisabled(false)
                props.myFunction()
            }
        })
    }
    
    return(
        <div className="itineraryCard">
            <div className="itineraryVisibleInfo">
                <div className="itineraryHeader">
                    <div className="itineraryAuthorContainer">
                        <div className="itineraryAuthorPhoto" style={{backgroundImage:`url('/assets/${author.image}')`}}></div>
                        <p>Author: {author.name}</p>
                    </div>
                    <h2>{title}</h2>
                    <p>Likes: <span onClick={heartHandler} className="heartEmoji">{props.likedItineraries.indexOf(_id) === -1 ? '🤍' : '❤️'}</span>{likes}</p>
                </div>
                <div className="itineraryDescriptionContainer">
                    <h4>{description}</h4>
                </div>
                <div className="itineraryMainInfo">
                    <div className="itineraryPriceDurationContainer">
                        <div className="itineraryPrice">
                            <p>Price:</p>{priceHandler()}
                        </div>
                        <p>Duration: {duration} {duration > 1 ? 'hrs' : 'hr'}🕒</p>
                    </div>
                    <div className="hashtagsContainer">
                        {hashtags.map((hashtag, index) => <a key={index} target="_blank" rel="noreferrer" href={`https://twitter.com/hashtag/${hashtag}`}><p>#{hashtag}</p></a>)}
                    </div>
                </div>
                <button onClick={clickHandler}>View more</button>
            </div>
            <div className="itineraryActivitiesContainer" style={render ? {display:"block"} : {display:"none"}}>
                <p>Under construction</p>
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        token: state.usersRed.token,
        likedItineraries: state.usersRed.likedItineraries
    }
}
const mapDispatchToProps = {
    likeAnItinerary : userActions.likeAnItinerary
}
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)