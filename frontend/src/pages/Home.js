import Header from '../components/Header'
import Footer from '../components/Footer'
import Mainhome from '../components/Mainhome'
import { useEffect } from 'react'
const Home = () =>{
    useEffect(() =>{
        window.scrollTo(0,0)
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