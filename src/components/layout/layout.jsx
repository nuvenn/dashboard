import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "../../styles/App.scss";
import Container from "../layout/base/container";
import Menu from "../layout/base/menu";
import Content from "../layout/base/content";
import Header from "../layout/base/header";
import Box from "../layout/ui/box";
import { setOpenMainMenu, setOpenMobileMenu } from "./layoutActions";

export default function Layout(props) {
  const layout = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  const toggleMenu = function () {
    layout.openMainMenu
      ? dispatch(setOpenMainMenu(false))
      : dispatch(setOpenMainMenu(true));
  };

  const toggleMenuMobile = function () {
    layout.openMobileMenu
      ? dispatch(setOpenMobileMenu(false))
      : dispatch(setOpenMobileMenu(true));
  };

  const logout = function () {
    dispatch(setOpenMainMenu(true));
    dispatch(setOpenMobileMenu(false));
    localStorage.clear();
  };

  return (
    <>
      <Container>
        <Menu
          open={layout.openMainMenu}
          openMobile={layout.openMobileMenu}
          toggleMenu={toggleMenu}
          toggleMenuMobile={toggleMenuMobile}
          logout={logout}
        />
        <Content open={layout.openMainMenu}>
          <Box marginTop={2} marginBottom={2}>
            <Header title={props.title} />
            {props.children}
          </Box>
        </Content>
      </Container>
    </>
  );
}
