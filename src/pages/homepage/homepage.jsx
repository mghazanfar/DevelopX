import React from "react";
import AppBar from "../../components/appbar/appbar";
import { OurServices } from "../../components/ourservices/ourservices";
import { Portfolio } from "../../components/portfolio/portfolio";
import HomePageCard from "../../components/homepagecard/homepagecard";
import GlobalBusiness from "../../components/globalbusiness/globalbusiness";
import { Footer } from "../../components/footer/footer";
import { SocialMediaFooter } from "../../components/socialmediafooter/socialmediafooter";
import GetInTouch from "../../components/getintouch/getintouch";
import { Link } from "react-router-dom";
import { ViewButton } from "../../components/viewbutton/viewbutton";

export const HomePage = (props) => {
  return (
    <div id="header">
      <div
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundColor: "#051622",
          backgroundImage:
            "url(https://static3.avast.com/web/i/mkt/technology/svg/raster/svg-malware__2.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "bottom",
        }}
      >
        <AppBar selected="1" />
        <OurServices />
      </div>
      <Portfolio />
      <HomePageCard
        title=" hubbi core"
        discrption=" hubbi core is focused on user friendliness and combines a wallet manager and exchange. The solution was made open source in September 2018 and the wallet manager went live on public mainnet in November 2018. "
      />
      <Link to="/view-portfolio">
        <ViewButton text="View Portfolio" showArrow color="#ff1e58" />
      </Link>
      <GlobalBusiness />
      <GetInTouch />
      <Footer />
      <SocialMediaFooter />
    </div>
  );
};
