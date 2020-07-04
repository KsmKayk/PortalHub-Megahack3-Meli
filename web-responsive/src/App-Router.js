import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import {isAuthenticated} from "./auth"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route
      {...rest}
      render={props => 
        isAuthenticated() ? (
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
        <Route exact path="/" component={() => <Login/>}/>
        <Route exact path="/Register" component={() => <Register/>}/>
        <PrivateRoute path="/Home" component={() => <Home/>} />
      </Switch>
    </BrowserRouter>
  )
}
