import React, { useState} from "react";
import auth from "../auth"
import "./global.css";
import "./Login.css"
import api from "../services/localapi"
const logo = require("./public/Logo.svg")



export const Login = props => {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  async function handleSubmit(evt) {
    evt.preventDefault()
    await api.post("/auth", {
      Email:Email,
      Password:Password
    }).then(function(response) {
      if(response.data === true) {
          
          auth.login(() => {props.history.push("/home")})
      }
      if(response.data === false) {
        localStorage.setItem("@portalhub/isLogged?", false)
      }
    })
    
  } 

  return (
    <>
    <div className="flex">
      <div className="cell">
        <img src={logo} alt="logo" className="logo"/>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" id="email" className="email" placeholder="jane@example.com" value={Email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" name="password" id="password" className="password" placeholder="••••••••••••" value={Password} onChange={e => setPassword(e.target.value)}/>
          <button type="submit" className="login">Acessar</button>
        </form>
      </div>
      </div>
    </>
 )
}