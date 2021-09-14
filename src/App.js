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
import BurgerMenu from "react-burger-menu";
import Font, { Text } from "react-font";

function App() {
  const Menu = BurgerMenu["slide"];
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
