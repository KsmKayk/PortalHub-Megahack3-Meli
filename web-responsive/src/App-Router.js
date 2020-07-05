import React from "react";
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import auth from "./auth"

import {Login} from "./pages/Login"
import {Register} from "./pages/Register"
import {Home} from "./pages/Home"
import {Dashboard} from "./pages/Dashboard"
import Notfound from "./pages/notfound";

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route
      {...rest}
      render={props => 
        auth.isLogged() ? (
          <Component {...props} />
        ) : (
          <Redirect to= {{ pathname: "/", state: {from: props.location}}} />
        )
    }
  />
)

export default function App() {
  return(
    <BrowserRouter>
      <Switch>
      <Route exact path="/notfound" component={() => <Notfound/>}/>
      <Route exact path="/" component={Dashboard}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
        <PrivateRoute exact path="/Home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
