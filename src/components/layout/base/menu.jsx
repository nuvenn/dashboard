import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import HomeIcon from "@material-ui/icons/Home";
import QuantidadeVinculosIcon from "@material-ui/icons/PermContactCalendar";
import TotaisFolhaIcon from "@material-ui/icons/AttachMoney";
import SairIcon from "@material-ui/icons/Input";
import MenuIconOpen from "@material-ui/icons/KeyboardArrowRight";
import MenuIconClose from "@material-ui/icons/KeyboardArrowLeft";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

import theme from "../../../theme";
import { IconButton } from "@material-ui/core";

const Link = React.forwardRef(function Link(props, ref) {
  return (
    <Tooltip title={props.page} placement="right">
      <div {...props} ref={ref}>
        <NavLink
          activeStyle={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.colorWhite,
          }}
          to={props.to}
          className="menu__button"
        >
          {props.page}
          {props.children}
        </NavLink>
      </div>
    </Tooltip>
  );
});

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
            <Link to="/home/" page="Página Inicial">
              <HomeIcon />
            </Link>
          </li>
          <li>
            <Link to="/quantidadevinculos/" page="Quantidade de vínculos">
              <QuantidadeVinculosIcon />
            </Link>
          </li>
          <li>
            <Link to="/totaisfolha/" page="Totais de Folha">
              <TotaisFolhaIcon />
            </Link>
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
