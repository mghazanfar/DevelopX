import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { PortfolioProject } from "../../components/portfolioproject/portfolioproject";
import DevelopxAppBar from "../../components/appbar/appbar";
import { Footer } from "../../components/footer/footer";
import { SocialMediaFooter } from "../../components/socialmediafooter/socialmediafooter";

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
}));
export const PortfolioPage = (props) => {
  const classes = useStyles();
  return (
    <Box>
      <DevelopxAppBar selected="2" color="black" />
      <PortfolioProject
        title="Developx"
        subtitle="    Smart Package Management"
        discription1="PackageX is a smart package handling solution which leverages
              computer vision and machine learning to automate the last-yard
              delivery of mail and packages, improving workplace productivity."
        discription2="The scalable and easy-to-use SaaS solution promises automation of
              mundane package handling tasks to ensure that deliveries are never
              lost, delayed, or stolen."
        color="#DEB992"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSFa6u9VZjarf5xuV-xoQqSr-XcRG6tQUB-A&usqp=CAU"
      />
      <PortfolioProject
        title="Developx"
        subtitle="    Smart Package Management"
        discription1="PackageX is a smart package handling solution which leverages
              computer vision and machine learning to automate the last-yard
              delivery of mail and packages, improving workplace productivity."
        discription2="The scalable and easy-to-use SaaS solution promises automation of
              mundane package handling tasks to ensure that deliveries are never
              lost, delayed, or stolen."
        color="rgb(2, 182, 124)"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSFa6u9VZjarf5xuV-xoQqSr-XcRG6tQUB-A&usqp=CAU"
      />
      <PortfolioProject
        title="Developx"
        subtitle="    Smart Package Management"
        discription1="PackageX is a smart package handling solution which leverages
              computer vision and machine learning to automate the last-yard
              delivery of mail and packages, improving workplace productivity."
        discription2="The scalable and easy-to-use SaaS solution promises automation of
              mundane package handling tasks to ensure that deliveries are never
              lost, delayed, or stolen."
        color="rgb(28, 44, 65)"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSFa6u9VZjarf5xuV-xoQqSr-XcRG6tQUB-A&usqp=CAU"
      />
      <Footer />
      <SocialMediaFooter />
    </Box>
  );
};
