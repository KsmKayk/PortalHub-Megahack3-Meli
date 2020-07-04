import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import "./global.css";
import "./Login.css"
import api from "../services/localapi"



export default function Login() {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  async function handleSubmit(evt) {
    evt.preventDefault()
    window.location.assign("http://www.localhost:3000/home")
    
  } 

  return ( 
    <div class="container" >
        <a class="links" id="paracadastro"></a>
        <a class="links" id="paralogin"></a>

        <div class="content"></div>
            
            <div id="login">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <p>
                <label for="email_login">Seu e-mail</label>
                <input id="email_login" name="email_login" required="required" type="text" placeholder="contato@htmlecsspro.com" value={Email} onChange={e => setEmail(e.target.value)}/>
                </p>

                <p>
                    <label for="senha_login">Sua senha</label>
                    <input id="senha_login" name="senha_login" required="required" type="password" placeholder="1234" value={Password} onChange={p => setPassword(p.target.value)} />
                </p>

                <p>
                    <input type="checkbox" name="manterlogado" id="manterlogado" value="" />
                    <label for="manterlogado">Manter-me logado</label>
                </p>

                <p>
                    <input type="submit" value="Logar"  />
                </p>

                <p class="link">
                    Ainda não tem conta?
                    <a href="/register">Cadastre-se</a>
                </p>
            </form>
        </div>
    </div>
   
    
    /*
  <>
    <form onSubmit={handleSubmit}>
            <h1>
                <label>Login:</label>
                <input type="text" name="login" id="Email" value={Email}/><br/>
                <label>Senha:</label><input type="password" name="senha" id="Password" value={Password}/><br/>
                <input type="submit" value="Cadastrar" id="cadastrar" name="cadastrar"/>
            </h1>
    </form>
  </> */
 )
}


