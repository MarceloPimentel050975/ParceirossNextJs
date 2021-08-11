import "./register.css";

export default function Register() {
  return (
    <div className="loginRegister">
      <div className="loginWrapperRegister">
        <img className="loginLeftRegister" src="assets/logo3.png" alt="" />
        <div className="loginRightRegister">
          <div className="loginBoxRegister">
            <input placeholder="Usuário" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Senha" className="loginInput" />
            <input placeholder="Senha Novamente" className="loginInput" />
            <button className="loginButton">Cadastrar</button>
            <button className="loginRegisterButton">
            Acessar Conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
