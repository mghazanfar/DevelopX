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
          <Box className={classes.titlefont}>Our administrations</Box>
        </Box>
        <Box className={classes.subtitle}>DevelopX</Box>
        <Box className={classes.subTitle}>Creating impact</Box>
        <p className={classes.discrptionpara1}>
          While working on the succeeding technologies, our digitated solutions
          are defining the human interactions with software.  Is your business
          requiring computerized revision then we are definitely there to help
          your business grow by updating your operations, using transpiring
          technicalities.
        </p>
        <ViewButton showArrow text="Talk To us" href="#contact" />
      </Grid>
    </Grid>
  );
};

export const OurServices = withWidth()(OurServicesWrapped);
