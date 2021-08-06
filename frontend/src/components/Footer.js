import { NavLink } from "react-router-dom"
const Footer = () => {
    return(
        <footer>
            <h4>FWB - 2021</h4>
            <div className="fotosRedes">
                <p>Redes:</p>
                <a href="https://facebook.com/" target="_blank" >
                    <div style={{backgroundImage: "url('./assets/logoface.png')"}}></div>
                </a>
                <a href="https://twitter.com/" target="_blank">
                    <div style={{backgroundImage: "url('./assets/logoinsta.png')"}}></div>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <div style={{backgroundImage: "url('./assets/logotwitter.png')"}}></div>
                </a>
            </div>
            <div>
                <p>Dirección: Av. Pellegrini 4371 Local 2, Rosario</p>
                <p>Telefono: +543412222222</p>
            </div>
            <nav>
                <NavLink exact to="/">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/cities">
                    <p>Cities</p>
                </NavLink>
            </nav>
        </footer>
    )
}
export default Footer