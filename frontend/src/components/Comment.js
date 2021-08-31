import {useState} from 'react'
const Comment = (props) =>{
    const [newComment, setnewComment] = useState('')
    const [didEdit, setdidEdit] = useState(false)
    const [guessing, setGuessing] = useState({
        status: false,
        what: ''
    })
    const {comment} = props
    // console.log(comment)
    // console.log(props.idUser)
    let ownerCondition = comment.author._id === props.idUser
    // let oldComment = comment.comment
    
    const inputHandler = (e) =>{
        setnewComment(e.target.value)
        setdidEdit(true)
    }
    const whatToDo = (e)=>{
        setGuessing({
            status: !guessing.status,
            what: e.target.id
        })
    }
    const didGuess = (e)=>{
        let option = e.target.id
        if (option === 'positive'){
            // console.log(option)
            // console.log(newComment)
            // console.log(comment._id)
            guessing.what === 'edit' ? props.editComment(newComment, comment._id) : props.removeComment(comment._id)
        }
        setGuessing(false)
    }
    // console.log(oldComment)
    // console.log(newComment)
    if(!comment.author){
        return <p>placeholder</p>
    }
    return(
        <div className="commentContainer" key={comment._id} id={comment._id}>
            <div className="photoUserComment" style={{backgroundImage: `url(${comment.author.photoURL})`}}></div>
            <p className="firstName">{comment.author.name.firstName}</p>
            <p>{comment.author.name.lastName}:</p>
            <div className="userComment">
                <input type="text" className={ownerCondition ? 'commentOwner' : ''} disabled={!ownerCondition} value={didEdit ? newComment : comment.comment} onChange={inputHandler}></input>
                <p className="buttonComment" style={ownerCondition ? {display: "block"} : {display: "none"}} id="edit" onClick={whatToDo}>✒️</p>
                <p className="buttonComment" style={ownerCondition ? {display: "block"} : {display: "none"}} id="remove" onClick={whatToDo}>🗑️</p>
                <p className="buttonComment" style={guessing.status ? {display: "block"} : {display: "none"}} id="positive" onClick={didGuess}>✔️</p>
                <p className="buttonComment" style={guessing.status ? {display: "block"} : {display: "none"}} id="negative" onClick={didGuess}>❌</p>            
            </div>
        </div> 
    )
}
export default Comment