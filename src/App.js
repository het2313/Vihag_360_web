import React, { Component } from "react";
import "./App.css";
import Home from "./comps/Home/home";
import { styles } from "./comps/Home/homeStyle";
// import { render } from "react-dom";
// import myImage from "./assets/pano_7000.jpg";
// import vihag from "./assets/Frame.png";
// import google from "./assets/1192770.png";
// import { ReactComponent as Logo } from "./assets/vihag_logo_white.svg";
// import { Pannellum, PannellumVideo } from "pannellum-react";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from "@material-ui/core";
import BurgerMenu from "react-burger-menu";
import Font, { Text } from "react-font";

function App() {
  const Menu = BurgerMenu["slide"];
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: matches ? 36 : 24,
      height: matches ? 28 : 16,
      left: matches ? 31 : 28,
      top: matches ? 31 : 28,
    },
    bmBurgerBars: {
      background: "#ffff",
      borderRadius: 10,
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.07)",
      backdropFilter: "blur(20px)",
      boxShadow: "0px 1px 24px -1px rgba(0, 0, 0, 0.5)",
      borderBottomRightRadius: 16,
      borderTopRightRadius: 16,
    },
    bmMenu: {
      overflow: "hidden",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
    menuItems: {
      marginTop: 32,
      display: "flex",
      flexDirection: "column",
      height: 200,
      justifyContent: "space-between",
    },
  };
  return (
    <div>
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        styles={styles}
      >
        <Font family="Roboto Mono">
          <div style={styles.menuItems}>
            <a>About us</a>
            <a>Work</a>
            <a>Contact us</a>
          </div>
        </Font>
      </Menu>
      <Home />
    </div>
  );
}

export default App;
