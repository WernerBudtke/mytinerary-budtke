import Header from '../components/Header'
import Footer from '../components/Footer'
import Mainsignup from '../components/Mainsignup'
import {useEffect} from 'react'
const Signup = (props) =>{
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "myTinerary - Sign Up"
        return () => {
            document.title = "myTinerary"
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
            <Header/>
            <Mainsignup {...props}/>
            <Footer/>
        </>
    )
}
export default Signup