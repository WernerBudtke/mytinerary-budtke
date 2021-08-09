import { NavLink } from "react-router-dom"
const Footer = () => {
    const goToHeaven = () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    return(
        <footer>
            <h4>FWB - 2021</h4>
            <div className="socialMedia">
                <p>Social media:</p>
                <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                    <div style={{backgroundImage: "url('./assets/logoface.png')"}}></div>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                    <div style={{backgroundImage: "url('./assets/logoinsta.png')"}}></div>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <div style={{backgroundImage: "url('./assets/logotwitter.png')"}}></div>
                </a>
            </div>
            <div className="contactInfo">
                <p>Address: Rio de Janeiro 284 9C, CABA</p>
                <p>Telephone: +543412222222</p>
            </div>
            <nav>
                <NavLink exact to="/">
                    <p onClick={goToHeaven}>Home</p>
                </NavLink>
                <NavLink to="/cities">
                    <p>Cities</p>
                </NavLink>
            </nav>
        </footer>
    )
}
export default Footer