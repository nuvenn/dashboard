import React from "react";
import MenuIconOpen from "@material-ui/icons/KeyboardArrowRight";
import MenuIconClose from "@material-ui/icons/KeyboardArrowLeft";

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
            <button className="menu__button">Página Inicial</button>
          </li>
          <li>
            <button className="menu__button">Pagamentos</button>
          </li>
          <li>
            <button className="menu__button">Consultas</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
