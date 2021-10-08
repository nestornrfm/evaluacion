import React, { Component } from "react";
import "./login.css";
import logo from "./bootstrap-logo.svg";
/*aqui tambien en mayusculas
  y te falta grabar, cuando tiene un punto al lado del nombre arriba 
  significa que no se grabo,
  explico al volver

  Ahora deberia de funcionar
  */
//el className de--> className Name
class Login extends Component {
  doSubmit(event) {
    event.preventDefault(); //para que no recargue devuelta
    console.log("Enviando..."); //mostrar en la consola
  }
  render() {
    return (
      <main className="form-signin">
        <form onSubmit={this.doSubmit}>
          {" "}
          {/* alt shi A */}
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    );
  }
}
export default Login;
