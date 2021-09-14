import React, { Component } from "react";
import "../../App.css";
import { styles } from "./homeStyle";
import { render } from "react-dom";
import myImage from "../../assets/pano_7000.jpg";
import vihag from "../../assets/Frame.png";
import google from "../../assets/1192770.png";
import { ReactComponent as Logo } from "../../assets/vihag_logo_white.svg";
import { Pannellum, PannellumVideo } from "pannellum-react";
import BurgerMenu from "react-burger-menu";
import Font, { Text } from "react-font";

function Home() {
  return (
    <div id="outer-container">
      <main id="page-wrap" style={{ overflow: "auto" }}>
        <Pannellum
          width="100vw"
          height="100vh"
          image={myImage}
          showZoomCtrl={false}
          showFullscreenCtrl={false}
          pitch={10}
          yaw={180}
          hfov={110}
          autoLoad
          onLoad={() => {
            console.log("panorama loaded");
          }}
        >
          {/* <Pannellum.Hotspot
          type="info"
          pitch={11}
          yaw={-167}
          text="Info Hotspot Text 3"
          URL="https://github.com/farminf/pannellum-react"
        /> */}
        </Pannellum>
        <div style={styles.navBar}>
          <img src={vihag} alt="Logo" style={styles.logo} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div style={styles.heroLayout}>
            <Font family="Roboto Mono">
              <p style={styles.virtual}>Virtual</p>
              <p
                style={{
                  ...styles.virtual,
                  fontWeight: "bold",
                  color: "#9B0000",
                  textDecoration: "none",
                }}
              >
                Reality
              </p>
            </Font>
            <Font family="Roboto Mono">
              <p style={styles.tagLine}>
                <span style={{ color: "#ffff", fontWeight: "bold" }}>360º</span>
                photograpghy for your Wedding/Business/Hotel/
                <span style={{ color: "#ffff", fontWeight: "bold" }}>
                  anything
                </span>
              </p>
            </Font>
            <button style={styles.button}>
              <Font family="Roboto Mono">
                <p
                  style={{
                    color: "rgba(255, 255, 255)",
                    fontSize: 16,
                    letterSpacing: 2,
                    fontWeight: "bold",
                  }}
                >
                  Our work
                </p>
              </Font>
            </button>
          </div>
        </div>
        <img src={google} alt="Logo" style={styles.googleTrusted} />
      </main>
    </div>
  );
}

export default Home;
