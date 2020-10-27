import React, { useState } from "react";
import { makeStyles, Grid, withWidth, Box, Button } from "@material-ui/core";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  footerlink: {
    fontSize: 20,
    fontWeight: 400,
    color: "#59606f",
    textTransform: "capitalize",
  },
  padding: {
    padding: 55,
    justifyContent: "center",
    margintop: 54,
  },
  paddingPhone: {
    padding: 55,
    justifyContent: "center",
    margintop: 55,
  },
  gridlineheight: {
    lineHeight: 3,
  },
});

function FooterWraaped(props) {
  const classes = useStyles();

  const [count, setCount] = useState(0);

  return (
    <Grid
      container
      spacing={2}
      className={
        props.width === "xs" || props.width === "sm"
          ? classes.paddingPhone
          : classes.padding
      }
      alignItems="center"
    >
      <Grid item xs={12} sm={6} md={3}>
        <a href="#">
          <img src={logo} />
        </a>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        component={Box}
        display="flex"
        flexDirection="column"
        className={classes.gridlineheight}
      >
        <span>Technologies</span>

        <span>Portfolio</span>

        <span>About</span>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        component={Box}
        display="flex"
        flexDirection="column"
        className={classes.gridlineheight}
      >
        <span>Contact</span>
        <span component={Link} to="/career">
          Careers
        </span>
        <span>Information Security</span>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        component={Box}
        display="flex"
        flexDirection="column"
        className={classes.gridlineheight}
      >
        <span>Privacy Policy</span>
        <span>Terms of Service</span>

        <span>Feedback</span>
      </Grid>
    </Grid>
  );
}
export const Footer = withWidth()(FooterWraaped);
