import {NavLink} from 'react-router-dom'
const Header = () => {
    return(
        <header>
            <div className="tituloNavBar">
                <NavLink exact to="/"><div className="foto logo" style={{backgroundImage: "url('./assets/fotologo.png')"}}></div></NavLink>
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
                    <p>Sign Out</p>
                </NavLink>
                <div className="foto usuario" style={{backgroundImage: "url('./assets/fotologoff.png')"}}></div>
            </nav>
        </header>
    )
}
export default Header