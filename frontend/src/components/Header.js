import {NavLink} from 'react-router-dom'
const Header = () => {
    return(
        <header>
            <div className="titleNavBar">
                <NavLink exact to="/"><div className="photo logo" style={{backgroundImage: "url('./assets/fotologo.png')"}}></div></NavLink>
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
                <NavLink to="signout">
                    <p>Sign Up</p>
                </NavLink>
                <div className="photo user" style={{backgroundImage: "url('./assets/fotologoff.png')"}}></div>
            </nav>
        </header>
    )
}
export default Header