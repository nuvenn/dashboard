import React from "react";

export default function Login() {
  const onSubmit = function (e) {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="login">
          <div className="login__container">
            <div className="login__logo"></div>
            <input
              className="login__input"
              type="input"
              name="username"
              placeholder="Usuário"
            />
            <input
              className="login__input"
              type="password"
              name="password"
              placeholder="Senha"
            />
            <button type="submit" className="login__button">
              Entrar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
