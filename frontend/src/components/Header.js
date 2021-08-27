import {NavLink, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
const Header = (props) => {
    const {token} = props
    const logOut = ()=>{
        props.logOut()
    }
    return(
        <header>
            <div className="titleNavBar">
                <NavLink exact to="/"><div className="photo logo" style={{backgroundImage: "url('/assets/fotologo.png')"}}></div></NavLink>
                <NavLink exact to="/"><h1>myTinerary</h1></NavLink>
            </div>
            {token && <p className="personalWelcome">Welcome {`${props.firstName}`}!</p>}
            <nav>
                <NavLink exact to="/">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/cities">
                    <p>Cities</p>
                </NavLink>
                {!token && <NavLink to="/signin"><p>Sign In</p></NavLink>}
                {!token && <NavLink to="/signup"><p>Sign Up</p></NavLink>}
                {token && <p className="linkBehave" onClick={logOut}>Sign Out</p>}
                <Link to="/favourites"><div className="photo user" style={{backgroundImage: `url(${props.userPhoto !== "" ? props.userPhoto : '/assets/fotologoff.png'})`}}></div></Link>
            </nav>
        </header>
    )
}
const mapStateToProps = (state)=>{
    return {
        userPhoto: state.usersRed.photoURL,
        token: state.usersRed.token,
        firstName: state.usersRed.firstName
    }
}
const mapDispatchToProps = {
    logOut: userActions.logOut
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)