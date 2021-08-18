import { useState } from "react"
const Itinerary = (props) =>{
    console.log(props.itinerary)
    const {author, description, hashtags, price, duration, likes, title} = props.itinerary
    const [render, setRender] = useState(false)
    const [heart, setHeart] = useState(false)
    const clickHandler = (e) =>{
        e.target.innerText = e.target.innerText === "View more" ? 'View less' : 'View more'
        setRender(!render)
    }
    const priceHandler = ()=>{
        let arrayPrice = []
        for(let i = 0; i < price; i++){
            arrayPrice.push('💵')
        }
        return arrayPrice.map((dollar, index) => <p key={index}>💵</p>)
    }
    const heartHandler = (e) =>{
        e.target.innerText = e.target.innerText === '❤️' ? '🤍' : '❤️'
        setHeart(!heart)
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
                    <p>Likes: <span onClick={heartHandler} className="heartEmoji">{likes > 0 ? '❤️' : '🤍'}</span>{likes}</p>
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
export default Itinerary