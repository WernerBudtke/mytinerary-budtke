import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import userActions from "../redux/actions/userActions"
const Mainsignup = (props) =>{   // hacerlo con on changes al salir de los inputs? copada la idea
    const [renderError, setRenderError] = useState({error: ' '})
    const countries = ["Argentina", "Chile", "Brazil", "Uruguay", "Perú", "Bolivia", "Paraguay", "Rest of the World"]
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        eMail: '',
        password: '',
        photoURL: '',
        country: countries[0]
    })
    const inputHandler = (e) =>{
        setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
    }
    const missingFields = () =>{
        const {firstName, lastName, eMail, password, photoURL} = newUser
        let namesOfFields = ["firstName", "lastName", "eMail", "password", "photoURL"]
        let bodyFields = [firstName, lastName, eMail, password, photoURL]
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
    
    const handleError = (string) =>{
        // console.log(renderError.error)
        return renderError.error.includes(string)
    }
    useEffect(()=>{
        if(renderError.error.includes('Network')){
            console.error(renderError.error)
            props.history.push('/error')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[renderError.error])
    // console.log(renderError)
    // console.log(newUser)
    return(
        <main className='signUpMain'>
            <form className='signUpForm'>
                <label htmlFor="firstName">First Name: {handleError('firstName') && 'Invalid Field'}</label>
                <input type="text" className={handleError('firstName') ? 'fieldError' : ''} placeholder="First Name" id="firstName" name="firstName" required value={newUser.firstName} onChange={inputHandler}/>
                <label htmlFor="lastName">Last Name: {handleError('lastName') && 'Invalid Field'}</label>
                <input type="text" className={handleError('lastName') ? 'fieldError' : ''} placeholder="Last Name" id="lastName" name="lastName" required value={newUser.lastName} onChange={inputHandler}/>
                <label htmlFor="eMail">Email: {handleError('eMail') ? handleError('eMail already in use') ? 'Email already in Use' : 'Invalid Field' : ''}</label>
                <input type="email" className={handleError('eMail') ? 'fieldError' : ''} placeholder="placeholder@mail.com" id="eMail" name="eMail" required value={newUser.eMail} onChange={inputHandler}/>
                <label htmlFor="password">Password: {handleError('password') && 'Invalid Field'}</label>
                <input type="password" className={handleError('password') ? 'fieldError' : ''} placeholder="Password" id="password" name="password" required value={newUser.password} onChange={inputHandler}/>
                <label htmlFor="photoURL">Photo URL: {handleError('photoURL') && 'Invalid Field'}</label>
                <input type="url" className={handleError('photoURL') ? 'fieldError' : ''} placeholder="URL of your photo" id="photoURL" name="photoURL" required value={newUser.photoURL} onChange={inputHandler}/>
                <label htmlFor="country">Country: {handleError('country') && 'Invalid Field'}</label>
                <select name="country" id="country" value={newUser.country} onChange={inputHandler}>
                {countries.map(country => {
                    return <option key={country} value={country}>{country}</option>
                })}
                </select>
                <button type="button" onClick={submitNewUser}>SIGN UP</button>
            </form>
            <Link to="/signin">Already registered? SIGN IN!</Link>
        </main>
    )
}
const mapDispatchToProps = {
    registerUser : userActions.registerUser 
}
export default connect(null, mapDispatchToProps) (Mainsignup)