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

function App() {
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
// los /itineraries/:id lo que venga luego de :, lo guarda dentro de match param prop ID si pongo culo va culo
export default App;
// componente sign in, sign up. con sus formularios. enviar a backend, pedido login sign up, backend debe devolver si cuenta fue creada con exito o no. o si contraseña estaba bien o no.