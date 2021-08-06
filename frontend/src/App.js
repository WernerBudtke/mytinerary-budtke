import './App.css'
import Home from './pages/Home'
import Cities from './pages/Cities'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/" render={(props) => {...props} <Home invitados={invitados}/>}/> */}
        <Route path="/cities" component={Cities}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
