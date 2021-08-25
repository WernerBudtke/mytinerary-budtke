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

function App(props) {
  // useEffect(()=>{
  //   let myLocalStorage = window.localStorage
  //   let actualDate = new Date()
  //   console.log(actualDate)
  //   let day = actualDate.getDay().toString()
  //   let month = actualDate.getMonth().toString()
  //   console.log(day)
  //   console.log(month)
  //   myLocalStorage.getItem("userPhoto") === null && myLocalStorage.setItem("userPhoto", props.userPhoto)
  //   myLocalStorage.getItem("userPhoto") === "" && myLocalStorage.setItem("userPhoto", props.userPhoto)
  //   myLocalStorage.getItem("actualDay") === null && myLocalStorage.setItem("actualDay", day)
  //   myLocalStorage.getItem("actualMonth") === null && myLocalStorage.setItem("actualMonth", month)
  //   if((myLocalStorage.getItem("actualDay") !== day) || (myLocalStorage.getItem("actualMonth") !== month)){
  //     console.log("entro aca")
  //     myLocalStorage.removeItem('userPhoto')
  //     myLocalStorage.removeItem('actualDay')
  //     myLocalStorage.removeItem('actualMonth')
  //   }
  //   console.log(myLocalStorage.getItem("userPhoto"))
  //   console.log(myLocalStorage.getItem("actualDay"))
  //   console.log(myLocalStorage.getItem("actualMonth"))
  // },[props.userPhoto])
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/" render={(props) => {...props} <Home invitados={invitados}/>}/> */}
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
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
    userPhoto: state.usersRed.photoURL
  }
}
// los /itineraries/:id lo que venga luego de :, lo guarda dentro de match param prop ID si pongo culo va culo
export default connect(mapStateToProps)(App);
// componente sign in, sign up. con sus formularios. enviar a backend, pedido login sign up, backend debe devolver si cuenta fue creada con exito o no. o si contraseña estaba bien o no.