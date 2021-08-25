import Header from '../components/Header'
import Footer from '../components/Footer'
import Mainsignin from '../components/Mainsignin'
import {useEffect} from 'react'
const Signin = (props) =>{
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "myTinerary - Sign In"
        return () => {
            document.title = "myTinerary"
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
            <Header/>
            <Mainsignin {...props}/>
            <Footer/>
        </>
    )
}
export default Signin