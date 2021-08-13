import { useEffect, useRef, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Error = (props) =>{
    const [render, setRender] = useState(false)
    var timeLeft = useRef(3)
    useEffect(()=>{
        let timeOut = setTimeout(()=>{
            timeLeft.current--
            timeLeft.current === 0 ? props.history.push('/') : setRender(!render)  
        },1000)
        return () => clearTimeout(timeOut)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[render])
    return(
        <>
            <Header/>
            <main className="mainCities"><div className="noCitiesContainer"><p>Something went wrong! you'll be redirected in {timeLeft.current}s</p></div></main>
            <Footer/>
        </>
    )
}
export default Error