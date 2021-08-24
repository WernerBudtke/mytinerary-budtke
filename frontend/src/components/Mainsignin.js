import { Link } from "react-router-dom"
import { useState } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"

const Mainsignin = (props) =>{
    const [renderError, setRenderError] = useState({error: ''})
    const inputHandler = (e) =>{
        let childrens = Array.from(e.target.parentNode.children).filter(element => element.tagName === "INPUT")
        let namesOfFields = ["eMail", "password"]
        let dataUser = {}
        namesOfFields.forEach(property => {
            dataUser = {
                ...dataUser,
                [property]:childrens.find(element => element.id === property).value
            }
        })
        props.loginUser(dataUser)
        .then(res =>{
            console.log(res)
            !res.success ? setRenderError({error: res.error}) : props.history.push('/user/logged')
        })
    }
    return(
        <main className="signUpMain">
            <form className="signUpForm">
                <label htmlFor="eMail">Email:</label>
                <input type="email" placeholder="placeholder@mail.com" id="eMail" required/>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="password" id="password" required/>
                <button type="button" onClick={(e) => inputHandler(e)}>SIGN IN</button>
                {renderError.error !== "" && <p>Invalid email or password!</p>}
            </form>
            <Link to="/signup">Don't have an account yet? SIGN UP NOW!</Link>
        </main>
    )
}
const mapStateToProps = (state) =>{
    return{
    }
}
const mapDispatchToProps = {
    loginUser : userActions.loginUser
}
export default connect(mapStateToProps, mapDispatchToProps) (Mainsignin)