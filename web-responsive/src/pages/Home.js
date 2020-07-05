import React from "react";
import "./global.css";
import "./Home.css"
import auth from "../auth"

export const Home = props => {
  return (
    <>
      <div className="flex">
        <div className="cell">
          <div className="barraLateral">
            <img src="" alt="" className="back"/>
            <a href="" className="perfil">José Silva</a>
            <a href="" className="entrega">Entrega</a>
            <a href="" className="entregador">Entregador</a>
            <a href="" className="seja-entregador">Seja Entregador</a>
            <a href="" className="duvidas">Duvidas</a>
            <a href="" onClick={() => {auth.logout(() => {props.history.push("/")})}} className="sair">Sair</a>
          </div>
        </div>
      </div>
    </>
  )
}