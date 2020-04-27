import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PagamentosIcon from "@material-ui/icons/AttachMoney";
import ConsultasIcon from "@material-ui/icons/ListAlt";
import SairIcon from "@material-ui/icons/Input";
import MenuIconOpen from "@material-ui/icons/KeyboardArrowRight";
import MenuIconClose from "@material-ui/icons/KeyboardArrowLeft";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

import theme from "../../../theme";
import { IconButton } from "@material-ui/core";

export default function Menu(props) {
  const logout = function () {
    localStorage.clear();
  };

  return (
    <div className={props.open ? "menu menu--opened" : "menu"}>
      <div className="menu__header">
        <div className="menu__hambuguer">
          <IconButton onClick={() => props.toggleMenuMobile()}>
            <MenuIcon />
          </IconButton>
        </div>
        <div
          className={
            props.open ? "menu__logo" : "menu__logo menu__logo--little"
          }
        ></div>
        <div className="menu__toggle">
          <button
            className="menu__toggle__button"
            onClick={() => props.toggleMenu()}
          >
            {props.open ? <MenuIconClose /> : <MenuIconOpen />}
          </button>
        </div>
      </div>
      <nav
        className={
          props.openMobile
            ? "menu__navigation menu__navigation--opened"
            : "menu__navigation"
        }
      >
        <ul>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.colorWhite,
              }}
              to="/home/"
              className="menu__button"
            >
              Pagina Inicial
              <HomeIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.colorWhite,
              }}
              to="/pagamentos/"
              className="menu__button"
            >
              Pagamentos
              <PagamentosIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.colorWhite,
              }}
              to="/consultas/"
              className="menu__button"
            >
              Consultas
              <ConsultasIcon />
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => logout()} to="/" className="menu__button">
              Sair
              <SairIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
