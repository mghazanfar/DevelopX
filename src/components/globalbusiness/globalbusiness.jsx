import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import react from "../../assets/react.png";
import aa from "../../assets/aa.png";
import pwa from "../../assets/pwa-mg.jpeg";
import gm from "../../assets/gm.png";
import expo from "../../assets/expo.png";
import nb from "../../assets/nb.svg";
import gatsby from "../../assets/gatsby.png";
import mb from "../../assets/mb.png";
import rn from "../../assets/rn.png";
import ad from "../../assets/ad.png";
import ws from "../../assets/ws.png";
import mui from "../../assets/mui.svg";
import hc from "../../assets/hc.png";
import ap from "../../assets/ap.png";
import at from "../../assets/at.svg";
import bootstrap from "../../assets/boostrap.png";
import cv from "../../assets/cv.png";
import aws from "../../assets/aws.png";
import ups from "../../assets/ups.png";
import gp from "../../assets/gp.png";
import gql from "../../assets/gql.png";
import js from "../../assets/js.png";
import ts from "../../assets/ts.png";
import lp from "../../assets/lp.png";
import mongo from "../../assets/mongo.png";
import node from "../../assets/node.png";
import pp from "../../assets/pp.png";
import venia from "../../assets/venia.svg";
import vue from "../../assets/vue.png";
import bc from "../../assets/bc.png";
import angular from "../../assets/angular.svg";

const useStyles = makeStyles({
  titlefont: {
    width: "100%",
    textAlign: "center",
    fontWeight: 900,
    marginTop: 91,
    paddingTop: 30,
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  },
  tech:{
    height: 40
  }
});

export default function GlobalBusiness() {
  const classes = useStyles();
  const techs = [
    react,
    angular,
    vue,
    node,
    rn,
    mongo,
    venia,
    pwa,
    expo,
    mb,
    gatsby,
    mb,
    lp,
    ts,
    gql,
    js,
    gp,
    ups,
    aws,
    cv,
    bootstrap,
    ap,
    hc,
    mui,
    ad,
    nb,
    ws,
    aa,
    at,
    gm,
    pp,
    bc,
  ];
  return (
    <Box className={classes.titlefont} id="tech">
      <h2>Our Expertise</h2>
      <Box display="flex" flexWrap="wrap" justifyContent="center" p={3} maxWidth="70%" alignItems="center">
        {techs.map(tech=>
        <Box mt={1} mr={1} border="1px solid grey" borderRadius="8px" p={1} display="flex" alignItems="center" bgcolor="antiquewhite">
          <img src={tech} alt="tech" className={classes.tech}/>
        </Box>)}
      </Box>
    </Box>
  );
}
