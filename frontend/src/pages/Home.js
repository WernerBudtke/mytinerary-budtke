import Header from '../components/Header'
import Footer from '../components/Footer'
import Mainhome from '../components/Mainhome'
import { useEffect } from 'react'
const Home = () =>{
    useEffect(() =>{
        window.scrollTo(0,0)
        document.title = "myTinerary - Home"
        return () => document.title = "myTinerary"
    },[])
    return (
        <>
            <Header/>
            <Mainhome/>
            <Footer/>
        </>
    )
}
export default Home