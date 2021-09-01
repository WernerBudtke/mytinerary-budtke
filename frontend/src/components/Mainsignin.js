import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
import { GoogleLogin } from 'react-google-login';
const Mainsignin = (props) =>{
    const [renderError, setRenderError] = useState({error: '', errorEffect: true})
    const [loading, setLoading] = useState(false)
    const [dataUser, setDataUser] = useState({
        eMail: '',
        password: '',
        google: false
    })
    const missingFields = () =>{
        const {eMail, password} = dataUser
        let namesOfFields = ["eMail", "password"]
        let bodyFields = [eMail, password]
        return namesOfFields.filter((field, index) => bodyFields[index] === "").join(' ')
    }
    const inputHandler = (e) =>{
        setDataUser({
            ...dataUser,
            [e.target.name] : e.target.value
        })
    }
    const submitHandler = (e) =>{ // agregar preloader?
        e.preventDefault()
        let badFields = missingFields()
        if(badFields === ''){
            setLoading(true)
            props.loginUser(dataUser).then(res => {
                !res.success && setRenderError({error: res.error, errorEffect:!renderError.errorEffect})
                setLoading(false)
            })
        }else{
            setRenderError({error: badFields, errorEffect:!renderError.errorEffect})
        }   
    }
    useEffect(()=>{
        if(renderError.error.includes('Network')){
            console.error(renderError.error)
            props.history.push('/error')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[renderError.error])
    const responseGoogle = response =>{
        // console.log(response)
        let googleUser = {
            eMail: response.profileObj.email || null,
            password: response.profileObj.googleId || null,
            google: true
        }
        props.loginUser(googleUser).then(res => !res.success && setRenderError({error: res.error}))
        // console.log(googleUser)
    }
    if(loading){
        return <main className="mainCities"><div className="noCitiesContainer"><p>Loading...</p></div></main>
    }
    return(
        <main className="signUpMain">
            <form className="signUpForm">
                <label htmlFor="eMail">Email:</label>
                <input type="email" placeholder="placeholder@mail.com" id="eMail" name="eMail" value={dataUser.eMail} onChange={inputHandler} required/>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Password" id="password" name="password" value={dataUser.password} onChange={inputHandler} required/>
                <button id="signInBtn" type="button" onClick={submitHandler}>SIGN IN</button>
                <GoogleLogin
                    clientId="367408341558-2t0f5ucqmmg4fhp1per1drrfmv5i611r.apps.googleusercontent.com"
                    render={renderProps => (
                    <button className='googleButton' onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign In with Google</button>
                    )}
                    onSuccess={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                {renderError.error !== "" && <p className={renderError.errorEffect ? 'errorEffectFirst' : 'errorEffectSecond'}>{renderError.error.includes('Google') ? renderError.error : 'Invalid email or password!'}</p>}
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