import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"

const Mainsignin = (props) =>{
    const [renderError, setRenderError] = useState({error: '', errorEffect: true})
    const [dataUser, setDataUser] = useState({
        eMail: '',
        password: '',
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
    const submitHandler = (e) =>{
        e.preventDefault()
        let badFields = missingFields()
        badFields === ''
        ?
        props.loginUser(dataUser).then(res => !res.success && setRenderError({error: res.error, errorEffect:!renderError.errorEffect}))
        :
        setRenderError({error: badFields, errorEffect:!renderError.errorEffect})
    }
    useEffect(()=>{
        if(renderError.error.includes('Network')){
            console.error(renderError.error)
            props.history.push('/error')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[renderError.error])
    return(
        <main className="signUpMain">
            <form className="signUpForm">
                <label htmlFor="eMail">Email:</label>
                <input type="email" placeholder="placeholder@mail.com" id="eMail" name="eMail" value={dataUser.eMail} onChange={inputHandler} required/>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Password" id="password" name="password" value={dataUser.password} onChange={inputHandler} required/>
                <button type="button" onClick={submitHandler}>SIGN IN</button>
                {renderError.error !== "" && <p className={renderError.errorEffect ? 'errorEffectFirst' : 'errorEffectSecond'}>Invalid email or password!</p>}
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