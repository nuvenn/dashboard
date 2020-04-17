import React from "react";
import Button from "@material-ui/core/Button";

export default function Menu(props) {
  return (
    <div className={props.open ? "menu menu--opened" : "menu"}>
      <Button
        className="menu__button"
        onClick={() => props.toggleMenu()}
        variant="contained"
        color="primary"
      >
        Menu
      </Button>
      {/* <div className="menu__logo"></div> */}
    </div>
  );
}
