import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";

import { Box, Grid, withWidth } from "@material-ui/core";
import { Link, useHistory, withRouter } from "react-router-dom";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  dflex: {
    display: "flex",
  },
  hoverEffect: {
    color: "#1BA098",
    "&:hover": {
      color: "#1BA098",
    },
  },
  btnbgclr: {
    backgroundColor: "white",
    borderRadius: 40,
    textTransform: "capitalize",
    fontSize: 16,
    textDecoration: "none",
    fontWeight: 500,
    paddingLeft: 20,
    paddingRight: 20,
    color: "black",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  btnbgclrBlack: {
    backgroundColor: "black",
    borderRadius: 40,
    textTransform: "capitalize",
    fontSize: 16,
    textDecoration: "none",
    fontWeight: 500,
    paddingLeft: 20,
    paddingRight: 20,
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  texttransfrm: {
    textTransform: "capitalize",
    fontSize: 16,
    fontSize: 16,
    fontFamily: "MyFontRegular",
  },
  appbarclr: {
    backgroundColor: "transparent",
  },
  appbarmargin: {
    marginTop: 12,
  },
  appbarmarginMobile: {
    marginTop: 12,
    flexDirection: "column",
  },
  appbarspacearround: {
    justifyContent: "space-around",
  },

  logofont: {
    textTransform: "capitalize",
    textDecoration: "none",
    fontSize: 40,
    fontWeight: 600,
    color: "white",
    fontFamily: "MyFontRegular",
  },
}));

function DevelopxAppBarWrapped(props) {
  const classes = useStyles();
  const [selected,setSelected] = useState("1");
  const {location: {pathname}} = useHistory()

  return (
    <div className={classes.root}>
      <Grid container>
        <AppBar position="static" elevation={0} className={classes.appbarclr}>
          <Toolbar
            className={[
              classes.appbarlinks,
              props.width === "xs"
                ? classes.appbarmarginMobile
                : classes.appbarmargin,
              props.width === "lg"
                ? classes.appbarspacearround
                : classes.appbarmargin,
              props.width === "sm"
                ? classes.appbarspacearround
                : classes.appbarmargin,
              props.width === "md"
                ? classes.appbarspacearround
                : classes.appbarmargin,
            ]}
          >
            <Box className={classes.contactmargin}>
              <Box
                className={classes.logofont}
                href="/#root"
                component="a"
                color={
                  props.match.path.includes("career") ||
                  props.match.path.includes("portfolio")
                    ? "black !important"
                    : "white"
                }
              >
                DevelopX
              </Box>
            </Box>
            <Box className={[classes.dflex]}>
              <Box className={classes.linkmargin}>
                <Button
                  color="inherit"
                  className={[
                    classes.hoverEffect,
                    classes.texttransfrm,
                    (selected === "1" && !pathname.includes("career")) && classes.btnbgclr,
                  ]}
                  component={Link}
                  to="/#root"
                  onClick={()=>setSelected("1")}
                >
                  About
                </Button>
              </Box>
              <Box className={classes.linkmargin}>
                <Button
                  color="inherit"
                  href="/#portfolio"
                  className={[
                    classes.hoverEffect,
                    classes.texttransfrm,
                    selected === "2" && classes.btnbgclrBlack,
                  ]}
                  onClick={()=>setSelected("2")}
                >
                  Portfolio
                </Button>
              </Box>

              <Box className={classes.linkmargin}>
                <Button
                  color="inherit"
                  className={[
                    classes.hoverEffect,
                    classes.texttransfrm,
                    selected === "5" && classes.btnbgclr,
                  ]}
                  href="#tech"
                  onClick={()=>setSelected("5")}
                >
                  Technologies
                </Button>
              </Box>
              <Box className={classes.linkmargin}>
                <Button
                  color="inherit"
                  className={[
                    classes.hoverEffect,
                    classes.texttransfrm,
                    selected === "6" && classes.btnbgclr,
                  ]}
                  href="#team"
                  onClick={()=>setSelected("6")}
                >
                  Our team
                </Button>
              </Box>

              <Box className={classes.linkmargin}>
                <Button
                  color="inherit"
                  className={[
                    classes.hoverEffect,
                    classes.texttransfrm,
                    selected === "3" && classes.btnbgclr,
                  ]}
                  href="/#contact"
                  onClick={()=>setSelected("3")}
                >
                  Contact
                </Button>
              </Box>
              <Box className={classes.linkmargin}>
                <Button
                  color="inherit"
                  className={[
                    classes.hoverEffect,
                    classes.texttransfrm,
                    (selected === "4" || pathname.includes("career")) && classes.btnbgclr,
                  ]}
                  component={Link}
                  onClick={()=>setSelected("4")}
                  to="/career"
                >
                  Career
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

const DevelopxAppBar = withWidth()(withRouter(DevelopxAppBarWrapped));
export default DevelopxAppBar;
