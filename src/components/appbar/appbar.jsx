import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";

import { Box, Grid, withWidth } from "@material-ui/core";
import { Link } from "react-router-dom";

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
      backgroundColor: "black",
    },
  },
  texttransfrm: {
    textTransform: "capitalize",
    fontSize: 16,
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
    fontSize: 40,
    fontWeight: 600,
    color: "white",
  },
}));

function DevelopxAppBarWrapped(props) {
  const classes = useStyles();

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
              <Box className={classes.logofont} href="#root">
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
                    props.selected === "1" && classes.btnbgclr,
                  ]}
                  component={Link}
                  to="/#root"
                >
                  About
                </Button>
              </Box>
              <Box className={classes.linkmargin}>
                <Button
                  color="inherit"
                  href="#portfolio"
                  className={[
                    classes.hoverEffect,
                    classes.texttransfrm,
                    props.selected === "2" && classes.btnbgclr,
                  ]}
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
                    props.selected === "4" && classes.btnbgclr,
                  ]}
                  href="#tech"
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
                    props.selected === "4" && classes.btnbgclr,
                  ]}
                  href="#team"
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
                    props.selected === "3" && classes.btnbgclr,
                  ]}
                  component={Link}
                  to="/#contact"
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
                    props.selected === "4" && classes.btnbgclr,
                  ]}
                  component={Link}
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

const DevelopxAppBar = withWidth()(DevelopxAppBarWrapped);
export default DevelopxAppBar;
