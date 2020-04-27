import React, { useContext } from "react";
import { __RouterContext } from "react-router";

export default function Login() {
  const router = useContext(__RouterContext);

  const onSubmit = function (e) {
    e.preventDefault();
    localStorage.setItem(
      "_u",
      JSON.stringify({
        id: "AC85AE1D-225B-4B9C-A3B0-C6C4CE30B143",
        numfunc: 763266,
        cpf: 76826627,
        email: "pimentel@techne.com.br",
        identVinc: "763266",
        nome: "Maristella Ribas",
        dtUltimoLogin: "Apr 27, 2020 8:42:55 AM",
        dtUltimoLoginDescr: "Hoje às 8:42",
        mensagemSaudacao: "Bom dia Maristella Ribas",
        perfil: "FUNC",
        usuario: "763266",
        dtCorrenteDeAcesso: "Apr 27, 2020 9:00:38 AM",
        dtCorrenteDeAcessoDescr: "Segunda-feira, 27 de Abril de 2020",
        chave: 65352,
        alteraSenha: "N",
      })
    );
    router.history.push("/quantidadevinculos/");
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
