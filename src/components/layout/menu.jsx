import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PagamentosIcon from "@material-ui/icons/AttachMoney";
import ConsultasIcon from "@material-ui/icons/ListAlt";
import MenuIconOpen from "@material-ui/icons/KeyboardArrowRight";
import MenuIconClose from "@material-ui/icons/KeyboardArrowLeft";
import { NavLink } from "react-router-dom";

import theme from "../../theme";

export default function Menu(props) {
  return (
    <div className={props.open ? "menu menu--opened" : "menu"}>
      <div
        className={props.open ? "menu__logo" : "menu__logo menu__logo--little"}
      ></div>
      <div className="menu__toggle">
        <button
          className="menu__toggle__button"
          onClick={() => props.toggleMenu()}
        >
          {props.open ? <MenuIconClose /> : <MenuIconOpen />}
        </button>
      </div>
      <nav className="menu__navigation">
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
        </ul>
      </nav>
    </div>
  );
}
