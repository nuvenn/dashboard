import React, { useState } from "react";

import "../../styles/App.scss";
import Container from "../layout/container";
import Menu from "../layout/menu";
import Content from "../layout/content";

export default function Layout(props) {
  const [open, setOpen] = useState(true);

  const toggleMenu = function () {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <Container>
        <Menu open={open} toggleMenu={toggleMenu} />
        <Content open={open}>{props.children}</Content>
      </Container>
    </>
  );
}
