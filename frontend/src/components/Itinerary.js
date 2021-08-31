import { useState, useEffect } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
import itinerariesActions from "../redux/actions/itinerariesActions"
import { Link } from "react-router-dom"
import Comment from "./Comment"
const Itinerary = (props) =>{
    // console.log(props.itinerary)
    const {author, description, hashtags, price, duration, likes, title, _id, comments} = props.itinerary
    // console.log(_id)
    const [render, setRender] = useState(false)
    const [blankComment, setblankComment] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [logged, setLogged] = useState(false)
    const [idUser, setidUser] = useState('')
    const [activities, setActivities] = useState([])
    useEffect(()=>{ 
        if(!props.token){
            setidUser('')
            return
        }
        props.isValidOwner(props.token)
        .then(res => res.success && setidUser(res.response))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.token])
    const [loggedComment, setloggedComment] = useState(false)
    const clickHandler = (e) =>{
        e.target.innerText = e.target.innerText === "View more" ? 'View less' : 'View more'
        !activities.length && props.getActivities(_id)
        .then(res => {
            res.success && setActivities(res.response)
            
        })
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
        if(!props.token){ // comunicar que debe estar logueado
            setLogged(true)
            return
        }
        setDisabled(true) // desabilito el input handler
        setLogged(false)
        props.likeAnItinerary(_id, props.token)
        .then((res) => {
            if(res.success){
                setDisabled(false) // habilito el input handler de nuevo
                props.myFunction() // mando a fetchear los itinerarios
            }else{
                console.error(res.response)
            }
        })
    }
    const [newComment, setnewComment] = useState("")
    const commentInputHandler = (e) =>{
        setnewComment(e.target.value)
    }
    const commentSendHandler = () =>{
        if(!props.token){
            setloggedComment(true)
            return
        }
        if(newComment === ''){
            setblankComment(true)
            return
        }
        props.sendComment(newComment, null, props.token, _id, "post").then(res => {
            if(res.success){
                props.myFunction()
                setnewComment('')
                setblankComment(false)
            }else{
                console.error('was not able to send comment')
                props.history.push('/error')
            } 
        })
    }
    const focusInput = () =>{
        !props.token && setloggedComment(true)
    }
    const keySubmit = (e)=>{
        // console.log(e.key)
        e.key === 'Enter' && commentSendHandler()
    }
    const handleResponse = (res) =>{
        if(res.success){
            props.myFunction()
        }else{
            console.error('was not able to edit comment')
            props.history.push('/error')
        }
    }
    const commentEditHandler = (editedComment, commentId) =>{
        if(!props.token){
            return
        }
        props.sendComment(editedComment, commentId, props.token, _id, "update").then(res => handleResponse(res))
    }
    const commentRemoveHandler = (commentId) =>{
        if(!props.token){
            return
        }
        props.sendComment("", commentId, props.token, _id, "delete")
        .then(res => handleResponse(res))
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
                    <p className="likesHeader">Likes: <span onClick={heartHandler} className="heartEmoji">{props.likedItineraries.find(element => element._id === _id) ? '❤️' : props.likedItineraries.indexOf(_id) !== -1 ? '❤️' : '🤍'}</span>{likes}</p>
                </div>
                <div className="needToBeLogged" style={logged ? {display: "block"} : {display: "none"}}>
                    <Link to="/signin"><p>You must log in to like an itinerary! Click here</p></Link>
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
                <h2>Activities</h2>
                <div className="activitiesContainer">
                    {activities.length > 0 
                    ? 
                    activities.map((activity, index) => {
                        return(
                            <div style={{backgroundImage: `url(${activity.photo})`}} key={index}>
                                <p>{activity.title}</p>
                            </div>
                        )
                    })
                    :<p>No activities yet!</p>
                    }
                </div>
                <h2>Comments</h2>
                <div className="commentsContainer">
                    <div>
                        {comments.length > 0 
                        ?
                        comments.map((comment, index) => <Comment key={index} idUser={idUser} removeComment={commentRemoveHandler} editComment={commentEditHandler} comment={comment}/>)
                        :
                        <p>No comments yet! be the first</p>
                    }
                    </div>
                    <div className="sendContainer">
                        <p>Send a new message:</p>
                        <input type="text" onChange={commentInputHandler} value={newComment} onKeyDown={keySubmit} onFocus={focusInput}></input>
                        <p className="buttonComment" onClick={commentSendHandler}>{'>'}</p>
                    </div>
                    <div className="needToBeLogged" style={loggedComment || blankComment ? {display: "block"} : {display: "none"}}>
                        <Link to="/signin"><p>You must log in to post a comment! Click here</p></Link> 
                        <p style={blankComment ? {display: "block"} : {display: "none"}}>Please write something</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        token: state.usersRed.token,
        likedItineraries: state.usersRed.likedItineraries,
    }
}
const mapDispatchToProps = {
    likeAnItinerary : userActions.likeAnItinerary,
    sendComment : itinerariesActions.sendComment,
    isValidOwner : userActions.isValidOwner,
    getActivities : itinerariesActions.getActivities
}
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)