import { useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import userActions from "../redux/actions/userActions"
const Mainsignup = (props) =>{
    const [renderError, setRenderError] = useState({error: ''})
    const inputHandler = (e) =>{
        let childrens = Array.from(e.target.parentNode.children).filter(element => element.tagName === "INPUT" || element.tagName === "SELECT")
        let namesOfFields = ["firstName", "lastName", "eMail", "password", "photoURL", "country"]
        let dataUser = {}
        let voidFields = []
        let dataVoids = 0
        namesOfFields.forEach(property => {
            if(childrens.find(element => element.id === property).value === ""){
                dataVoids++
                voidFields.push(property)
            }
            dataUser = {
                ...dataUser,
                [property]:childrens.find(element => element.id === property).value
            }
        })
        dataVoids === 0 ? props.registerUser(dataUser).then(res =>{!res.success ? setRenderError({error: res.error}) : props.history.push('/user/registered')}) : setRenderError({error: voidFields.join(' ')})    
    }

    const countries = ["Argentina", "Chile", "Brazil", "Uruguay", "Perú", "Bolivia", "Paraguay", "Rest of the World"]
    const handleErrors = (string) =>{
        return renderError.error.includes(string) ? 'fieldError' : ''
    }
    
    return(
        <main className='signUpMain'>
            <form className='signUpForm'>
                <label htmlFor="firstName">{handleErrors('firstName') === 'fieldError' ? 'First name: (REQUIRED)' : 'First Name:'}</label>
                <input className={handleErrors('firstName')} type="text" placeholder="First Name" id="firstName" name="firstName" required/>
                <label htmlFor="lastName">{handleErrors('lastName') === 'fieldError' ? 'Last name: (REQUIRED)' : 'Last name:'}</label>
                <input className={handleErrors('lastName')} type="text" placeholder="Last Name" id="lastName" name="lastName" required/>
                <label htmlFor="eMail">{handleErrors('eMail') === 'fieldError' ? 'Email: (REQUIRED)' : 'Email:'}</label>
                <input className={handleErrors('eMail')} type="email" placeholder="placeholder@mail.com" id="eMail" name="eMail" required/>
                <label htmlFor="password">{handleErrors('password') === 'fieldError' ? 'Password: (REQUIRED)' : 'Password:'}</label>
                <input className={handleErrors('password')} type="password" id="password" name="password" required/>
                <label htmlFor="photoURL">{handleErrors('photoURL') === 'fieldError' ? 'Photo URL: (REQUIRED)' : 'Photo URL:'}</label>
                <input className={handleErrors('photoURL')} type="url" id="photoURL" name="photoURL" required/>
                <label htmlFor="country">Country:</label>
                <select name="country" id="country">
                {countries.map(country => {
                    return <option key={country} value={country}>{country}</option>
                })}
                </select>
                <button type="button" onClick={(e) => inputHandler(e)}>SIGN UP</button>
                {renderError.error === "Complete all" && <p>Please complete all the fields!</p>}
            </form>
            <Link to="/signin">Already registered? SIGN IN!</Link>
        </main>
    )
}
const mapStateToProps = (state) =>{
    return{
    }
}
const mapDispatchToProps = {
    registerUser : userActions.registerUser 
}
export default connect(mapStateToProps, mapDispatchToProps) (Mainsignup)