import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { ViewButton } from "../viewbutton/viewbutton";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  headingfont: {
    color: "#017aff",
    fontWeight: 600,
    fontSize: 50,
    textAlign: "center",
    paddingTop: 80,
  },
  parafonts: {
    textAlign: "center",
    fontSize: 20,
    width: "55%",
    fontFamily: "MyFontRegular",

    paddingLeft: "22%",
    lineHeight: 1.2,

    marginTop: 22,

    color: "#626977",
  },
  btnMargin: {
    marginLeft: "43%",
    marginTop: 30,
  },
  textunderline: {
    textDecoration: "none",
  },
}));
export const Portfolio = (props) => {
  const classes = useStyles();
  return (
    <Box id="portfolio">
      <Box className={classes.headingfont}>What We Do?</Box>
      <Box className={classes.parafonts}>
        We have a refined and planned program after we have taken up a venture.
        We offer the stage from where the ventures take shape through stages of
        arranging, testing and execution. In this angle we take after an
        dexterous strategy and run the extend through a circle of criticism and
        steady advancement. Our portfolio below says it all:
      </Box>
    </Box>
  );
};
