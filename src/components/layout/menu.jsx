import React from "react";
import MenuIconOpen from "@material-ui/icons/KeyboardArrowRight";
import MenuIconClose from "@material-ui/icons/KeyboardArrowLeft";
import { NavLink } from "react-router-dom";

import theme from "../../theme";

export default function Menu(props) {
  return (
    <div className={props.open ? "menu menu--opened" : "menu"}>
      <div className="menu__logo"></div>
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
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
