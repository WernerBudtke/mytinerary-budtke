import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import userActions from "../redux/actions/userActions"
import { GoogleLogin } from 'react-google-login';
// 367408341558-omu79fduq0sjoipof12r4h673m14dv7l.apps.googleusercontent.com
const Mainsignup = (props) =>{   // hacerlo con on changes al salir de los inputs? copada la idea
    const [renderError, setRenderError] = useState({error: ''})
    const countries = ["Argentina", "Chile", "Brazil", "Uruguay", "Perú", "Bolivia", "Paraguay", "Rest of the World"]
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        eMail: '',
        password: '',
        photoURL: '',
        country: countries[0],
        google: false
    })
    useEffect(()=>{
        if(renderError.error.includes('Network')){
            console.error(renderError.error)
            props.history.push('/error')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[renderError.error])
    const inputHandler = (e) =>{
        setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
    }
    const missingFields = () =>{
        let namesOfFields = [...Object.keys(newUser)]
        let bodyFields = [...Object.values(newUser)]
        return namesOfFields.filter((field, index) => bodyFields[index] === "").join(' ')
    }
    const submitNewUser = (e) =>{
        e.preventDefault()
        let badFields = missingFields()
        badFields === '' 
        ? 
        props.registerUser(newUser).then(res => !res.success && setRenderError({error: res.error}))
        :
        setRenderError({error: badFields})
    }
    let myErrors = {
        firstName: "First name must have 2 chars atleast, max 35",
        lastName: "First name must have 2 chars atleast, max 35",
        eMail: renderError.error.includes('eMail already in use') ? "Email already in use!" : "Email must be a valid one, for example jwb@gmail.com",
        password: "Password must have atleast 4 chars or numbers!",
        photoURL: "The URL of the photo should be atleast 6 characters long",
        country: "Country should be a valid one!"
    }
    let myErrorsKeys = Object.keys(myErrors).filter(key => renderError.error.includes(key)) 
    const handleError = (string) =>{
        return renderError.error.includes(string) ? 'fieldError' : ''
    }
    const responseGoogle = response =>{
        // console.log(response)
        let googleUser = {
            firstName: response.profileObj.givenName || null,
            lastName: response.profileObj.familyName || null,
            eMail: response.profileObj.email || null,
            password: response.profileObj.googleId || null,
            photoURL: response.profileObj.imageUrl || null,
            country: "Rest of the World",
            google: true
        }
        console.log(googleUser.password)
        props.registerUser(googleUser).then(res => !res.success && setRenderError({error: res.error}))
        // console.log(googleUser)
    }
    return(
        <main className='signUpMain'>
            <form className='signUpForm'>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" className={handleError('firstName')} placeholder="First Name" id="firstName" name="firstName" required value={newUser.firstName} onChange={inputHandler}/>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" className={handleError('lastName')} placeholder="Last Name" id="lastName" name="lastName" required value={newUser.lastName} onChange={inputHandler}/>
                <label htmlFor="eMail">Email:</label>
                <input type="email" className={handleError('eMail')} placeholder="placeholder@mail.com" id="eMail" name="eMail" required value={newUser.eMail} onChange={inputHandler}/>
                <label htmlFor="password">Password:</label>
                <input type="password" className={handleError('password')} placeholder="Password" id="password" name="password" required value={newUser.password} onChange={inputHandler}/>
                <label htmlFor="photoURL">Photo URL:</label>
                <input type="url" className={handleError('photoURL')} placeholder="URL of your photo" id="photoURL" name="photoURL" required value={newUser.photoURL} onChange={inputHandler}/>
                <label htmlFor="country">Country:</label>
                <select name="country" id="country" value={newUser.country} onChange={inputHandler}>
                {countries.map(country => {
                    return <option key={country} value={country}>{country}</option>
                })}
                </select>
                <button type="button" onClick={submitNewUser}>SIGN UP</button>
                <GoogleLogin
                    clientId="367408341558-omu79fduq0sjoipof12r4h673m14dv7l.apps.googleusercontent.com"
                    render={renderProps => (
                    <button className='googleButton' onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign Up With Google</button>
                    )}
                    onSuccess={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </form>
            <div className="errorContainer" style={renderError.error === "" ? {display:"none"} : {display:"block"}}>
                <h4>ERRORS!: Please read carefully</h4>
                {myErrorsKeys.map((errorKey, index) => <p key={index}>{myErrors[errorKey]}</p>)}
            </div>
            <Link to="/signin">Already registered? SIGN IN!</Link>
        </main>
    )
}
const mapDispatchToProps = {
    registerUser : userActions.registerUser 
}
export default connect(null, mapDispatchToProps) (Mainsignup)