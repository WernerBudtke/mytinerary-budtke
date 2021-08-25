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
                    <div style={{backgroundImage: "url('/assets/logoface.png')"}}></div>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                    <div style={{backgroundImage: "url('/assets/logoinsta.png')"}}></div>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <div style={{backgroundImage: "url('/assets/logotwitter.png')"}}></div>
                </a>
            </div>
            <div className="contactInfo">
                <p>Address: <a href="https://www.google.com/maps/place/Sta+Fe+4333,+S2002KVG+Rosario,+Santa+Fe/@-32.9372963,-60.6830364,18z/data=!4m5!3m4!1s0x95b7acac682a3773:0x43efc8dd15945813!8m2!3d-32.9373436!4d-60.6819635" target="_blank" rel="noreferrer">Santa Fe 4333, Rosario</a></p>
                <p>Telephone: +543412222222</p>
            </div>
            <nav>
                <NavLink exact to="/">
                    <p onClick={goToHeaven}>Home</p>
                </NavLink>
                <NavLink to="/cities">
                    <p onClick={goToHeaven}>Cities</p>
                </NavLink>
            </nav>
        </footer>
    )
}
export default Footer