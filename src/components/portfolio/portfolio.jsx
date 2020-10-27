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
    fontFamily: "sans-serif",

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
        Our machine vision products and platform powers mobile, fixed, and
        wearables cameras to see the world like the human eye. Our solutions are
        deployed across industries to understand and describe the visual
        information from text, images, videos, barcodes, QR codes, and live
        scenes. Our proprietary algorithms and decision systems draw insights,
        establish baselines, and deliver real-time alerts and actions by a human
        or machine to enhance productivity, increase sales, reduce costs, and
        transform the experience for businesses and their end-users. View
        Portfolio
      </Box>
    </Box>
  );
};
