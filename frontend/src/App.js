import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import Home from './pages/Home'
import Cities from './pages/Cities'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Itineraries from "./pages/Itineraries";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import User from "./pages/User";
// import { useEffect } from "react";
import {connect} from 'react-redux'
import { useEffect } from "react";
import userActions from "./redux/actions/userActions";

function App(props) {
  const {token} = props
  useEffect(()=>{
    if(localStorage.getItem('token')){
      const savedUser = {
          photoURL: localStorage.getItem('photoURL'),
          token: localStorage.getItem('token'),
          firstName: localStorage.getItem('firstName'),
          likedItineraries: JSON.parse(localStorage.getItem('likedItineraries'))
      }
      props.logLs(savedUser)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/" render={(props) => {...props} <Home invitados={invitados}/>}/> */}
        {!token && <Route path="/signup" component={Signup}/>}
        {!token && <Route path="/signin" component={Signin}/>}
        <Route path="/cities" component={Cities}/>
        <Route path="/itineraries/:id" component={Itineraries}/>
        <Route path="/error/" component={Error}/>
        <Route path="/user/:action" component={User}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  )
}
const mapStateToProps = (state) =>{
  return {
    userPhoto: state.usersRed.photoURL,
    token: state.usersRed.token,
    firstName: state.usersRed.firstName
  }
}
const mapDispatchToProps = {
  logLs: userActions.logInLS
}
// los /itineraries/:id lo que venga luego de :, lo guarda dentro de match param prop ID si pongo culo va culo
export default connect(mapStateToProps, mapDispatchToProps)(App);
// componente sign in, sign up. con sus formularios. enviar a backend, pedido login sign up, backend debe devolver si cuenta fue creada con exito o no. o si contraseña estaba bien o no.