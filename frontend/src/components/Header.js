import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
const Header = (props) => {
    return(
        <header>
            <div className="titleNavBar">
                <NavLink exact to="/"><div className="photo logo" style={{backgroundImage: "url('/assets/fotologo.png')"}}></div></NavLink>
                <NavLink exact to="/"><h1>myTinerary</h1></NavLink>
            </div>
            <nav>
                <NavLink exact to="/">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/cities">
                    <p>Cities</p>
                </NavLink>
                <NavLink to="/signin">
                    <p>Sign In</p>
                </NavLink>
                <NavLink to="/signup">
                    <p>Sign Up</p>
                </NavLink>
                <div className="photo user" style={{backgroundImage: `url(${props.userPhoto !== "" ? props.userPhoto : '/assets/fotologoff.png'})`}}></div>
            </nav>
        </header>
    )
}
const mapStateToProps = (state)=>{
    return {
        userPhoto: state.usersRed.photoURL
    }
}
export default connect(mapStateToProps)(Header)