import { useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Error = (props) =>{
    useEffect(()=>{
        let timeOut = 0
        timeOut = setTimeout(()=>{
            props.history.push('/')
        },3000)
        return () => clearTimeout(timeOut)
    },[props.history])
    return(
        <>
            <Header/>
            <main className="mainCities"><div className="noCitiesContainer"><p>Something went wrong! you'll be redirected in 3s</p></div></main>
            <Footer/>
        </>
    )
}
export default Error