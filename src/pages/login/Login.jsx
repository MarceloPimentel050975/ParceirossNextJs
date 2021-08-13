import "./login.css";

import { Link } from "react-router-dom";
import { Google, GTranslate } from "@material-ui/icons";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <img className="loginLeft" src="assets/logo3.png" alt="" />
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Senha" className="loginInput" />
            <Link to="/" className="loginButton">
              <button className="loginButton">Entrar</button>
            </Link>
            <button className="loginButton">
            <img className="loginIconButton" src="assets/google.png"alt="" />
            Entrar com Google
            </button>
            <span className="loginForgot">Esqueceu a Senha?</span>
            <Link to="/register" className="loginRegisterButton">
              <button className="loginRegisterButton">Criar Conta</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
