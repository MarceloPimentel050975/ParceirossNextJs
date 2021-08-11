import "./login.css";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <img className="loginLeft" src="assets/logo3.png" alt="" />
        {/* <div className="loginLeft">
          <h3 className="loginLogo">Parceiross.com.br</h3>
          <span className="loginDesc">
            Conectando habilidades e comunidades.
          </span>
        </div> */}
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Senha" className="loginInput" />
            <Link to="/" className="loginButton">
              <button className="loginButton">Log In</button>
            </Link>
            <span className="loginForgot">Esqueceu a Senha?</span>
            <Link to="/register" className="loginRegisterButton">
              <button className="loginRegisterButton">
                Criar Conta
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
