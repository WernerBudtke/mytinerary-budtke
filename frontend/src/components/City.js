import { useState } from "react"

const City = ({cityName, country, image, description}) =>{
    const [render, setRender] = useState(false)
    const handleHover = () =>{
        setRender(!render)
    }
    return(
        <div className="cardCity" style={{backgroundImage:`url('assets/${image}')`}} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div>   
                <p className="title">{cityName}</p>
                {/* <p>{country}</p> */}
            </div> 
            <div className="cityDescription" style={render ? {display: "block"} : {display:"none"}}>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default City