import React, { useState } from "react";

import "../../styles/App.scss";
import Container from "../layout/container";
import Menu from "../layout/menu";
import Content from "../layout/content";

export default function Layout(props) {
  const [open, setOpen] = useState(true);
  const [openMobile, setOpenMobile] = useState(false);

  const toggleMenu = function () {
    open ? setOpen(false) : setOpen(true);
  };

  const toggleMenuMobile = function () {
    openMobile ? setOpenMobile(false) : setOpenMobile(true);
  };

  return (
    <>
      <Container>
        <Menu
          open={open}
          openMobile={openMobile}
          toggleMenu={toggleMenu}
          toggleMenuMobile={toggleMenuMobile}
        />
        <Content open={open}>{props.children}</Content>
      </Container>
    </>
  );
}
