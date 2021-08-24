import Header from '../components/Header'
import Footer from '../components/Footer'
import Mainsignup from '../components/Mainsignup'
const Signup = (props) =>{
    return (
        <>
            <Header/>
            <Mainsignup {...props}/>
            <Footer/>
        </>
    )
}
export default Signup