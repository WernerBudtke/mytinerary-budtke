import { Link } from "react-router-dom"
const Hero = () =>{
    return(
        <div className="hero" style={{backgroundImage: "url('./assets/fotohero.jpg')"}}>
            <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2>
            <Link to="/cities"><button id="callToActionHero">CLICK HERE</button></Link>
        </div>
    )
}
export default Hero