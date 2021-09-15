import React, { Component } from "react";
import "../../App.css";
// import { classes } from "./homeStyle";
import { render } from "react-dom";
import myImage from "../../assets/pano_7000.jpg";
import vihag from "../../assets/Frame.png";
import google from "../../assets/1192770.png";
import { ReactComponent as Logo } from "../../assets/vihag_logo_white.svg";
import { Pannellum, PannellumVideo } from "pannellum-react";
import BurgerMenu from "react-burger-menu";
import Font, { Text } from "react-font";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from "@material-ui/core";
// import { Container, Row, Col } from "react-bootstrap";

const useStyles = makeStyles({
  navBar: {
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    width: "100vw",
    height: (props) => (props.matches ? 90 : 70),
    borderWidth: 10,
    borderColor: "rgba( 255, 255, 255, 0.18 )",
    backdropFilter: "blur(20px)",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    boxShadow: "0px 1px 24px -1px rgba(0, 0, 0, 0.5)",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: "auto",
    // aspectRatio: 135 / 76,
  },
  heroLayout: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    boxShadow: " 0px 1px 24px -1px rgba(0, 0, 0, 0.5)",
    width: (props) => (props.matches ? 386 : "100vw" - 32),
    height: (props) => (props.matches ? 220 : 200),
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: (props) => (props.matches ? 32 : 16),
  },
  heroAlign: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  virtual: {
    fontSize: 24,
    lineHeight: "1.5em",
    textDecorationLine: "line-through",
    letterSpacing: 15,
    color: "rgba(255, 255, 255, 0.5)",
    margin: 0,
  },
  reality: {
    fontSize: 24,
    lineHeight: "1.5em",
    letterSpacing: 15,
    margin: 0,
    fontWeight: "bold",
    color: "#9B0000",
  },
  tagLine: {
    fontSize: (props) => (props.matches ? 16 : 14),
    fontWeight: "normal",
    lineHeight: "1.5em",
    letterSpacing: 2,
    color: "rgba(255, 255, 255, 0.5)",
    margin: 0,
    textAlign: "center",
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: "#9B0000",
    borderRadius: 8,
    // borderColor: "rgba(0, 0, 0,0)",
    // boxShadow: "0px 1px 24px -1px rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  googleTrusted: {
    position: "absolute",
    bottom: (props) => (props.matches ? 32 : null),
    right: (props) => (props.matches ? 32 : 16),
    top: (props) => (props.matches ? null : 86),
    width: (props) => (props.matches ? 71 : 50),
    height: "auto",
  },
  buttonText: {
    color: "rgba(255, 255, 255)",
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: "bold",
  },
});

function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles({ matches: matches });
  return (
    <div id="outer-container">
      <main id="page-wrap" className={{ overflow: "auto" }}>
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
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.navBar}
        >
          <Grid item xs={3} lg>
            <div></div>
          </Grid>
          <Grid item xs={6} lg={2}>
            <img src={vihag} alt="Logo" className={classes.logo} />
          </Grid>

          <Grid item xs={3} lg>
            <div></div>
          </Grid>
        </Grid>

        {/* <div className={classes.navBar}>
          <img src={vihag} alt="Logo" className={classes.logo} />
        </div> */}
        <div className={classes.heroAlign}>
          <div className={classes.heroLayout}>
            <Font family="Roboto Mono">
              <p className={classes.virtual}>Virtual</p>
              <p className={classes.reality}>Reality</p>
            </Font>
            <Font family="Roboto Mono">
              <p className={classes.tagLine}>
                <span className={{ color: "#ffff", fontWeight: "bold" }}>
                  360º
                </span>
                photograpghy for your Wedding/Business/Hotel/
                <span className={{ color: "#ffff", fontWeight: "bold" }}>
                  anything
                </span>
              </p>
            </Font>
            <button className={classes.button}>
              <Font family="Roboto Mono">
                <p className={classes.buttonText}>Our work</p>
              </Font>
            </button>
          </div>
        </div>
        <img src={google} alt="Logo" className={classes.googleTrusted} />
      </main>
    </div>
  );
}

export default Home;
