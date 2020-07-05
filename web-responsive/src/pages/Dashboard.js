import React from "react";
import "./global.css";
import "./Dashboard.css"
const logo = require("./public/Logo.svg")

export const Dashboard = props => {
  return(
    <>
      <div className="flex">
        <div className="cell">
          <img src={logo} alt="logo" className="logo"/>
          <h1 className="title">Personal Hub</h1>
          <a href="/Login" className="loginButton">Login</a>
          <a href="/Register" className="registerLink">Cadastre-se</a>
        </div>
      </div>
    </>
  )
}