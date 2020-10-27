import React from "react";
import { Grid, Box, makeStyles, withWidth } from "@material-ui/core";
import { ViewButton } from "../viewbutton/viewbutton";
const useStyles = makeStyles((theme) => ({
  titlemargn: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  titlefont: {
    color: "#DEB992",
    marginLeft: 15,

    fontWeight: 900,
    fontFamily: "revert",
  },
  subtitle: {
    color: "#DEB992",
    fontSize: 48,
    fontWeight: 800,
    fontFamily: "inherit",
  },
  subTitle: {
    color: "#DEB992",
    fontSize: 48,
    fontWeight: 300,
  },
  discrptionpara1: {
    fontSize: 19,
    color: "#DEB992",
    width: "87%",
  },
  btnfont: {
    fontWeight: 700,
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "revert",
    backgroundColor: "#017aff",
    borderRadius: 22,
    padding: 10,
    paddingRight: 25,
    paddingLeft: 25,
  },
  arrowfont: {
    marginLeft: 20,
    fontSize: 20,
  },
  imgheight: {
    width: "75%",
    borderRadius: 383,
    transform: "rotate(45deg)",
    marginTop: 85,
    height: "75%;",
  },
  linedraw: {
    backgroundColor: "#DEB992",
    width: 35,
    height: 3,
  },
}));

const OurServicesWrapped = ({ width }) => {
  const classes = useStyles();
  return (
    <Grid container justify={width === "xs" ? "center" : "flex-end"}>
      <Grid item xs={10} sm={4} md={4}>
        <Box className={classes.titlemargn}>
          <Box className={classes.linedraw} />
          <Box className={classes.titlefont}>Our Services</Box>
        </Box>
        <Box className={classes.subtitle}>What We Do</Box>
        <Box className={classes.subTitle}>And How We Do It</Box>
        <p className={classes.discrptionpara1}>
          We work on the future-tech today. Our digital solutions
          are shaping the way people use and interact with technology. Do you
          think your business is ready for a digital transformation? We can help
        </p>
        <p className={classes.discrptionpara1}>
          you revamp your business operations and products using emerging
          technologies.
        </p>
        <ViewButton showArrow text="Talk To An Expert" href="#contact" />
      </Grid>
    </Grid>
  );
};

export const OurServices = withWidth()(OurServicesWrapped);
