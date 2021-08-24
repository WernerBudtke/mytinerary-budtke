import Header from '../components/Header'
import Footer from '../components/Footer'
import Mainsignin from '../components/Mainsignin'
const Signin = (props) =>{
    return (
        <>
            <Header/>
            <Mainsignin {...props}/>
            <Footer/>
        </>
    )
}
export default Signin