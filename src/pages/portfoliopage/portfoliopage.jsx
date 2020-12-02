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
        title=" PackageX"
        discription1="PackageX powers the future of digital and contactless mailroom and transforms the end-user experience. PackageX uses machine vision to track packages and assets with a simple photo across industries, including higher education, real estate, and co-working spaces."
        color="#DEB992"
        image="https://packagex.app/static/mailroom-home-image-36cdd76ddb8a31e398bd35df5ec223bb.svg"
      />
      <PortfolioProject
        title="hubbi core"
        discription1="hubbi core is focused on user friendliness and combines a wallet manager and exchange. The solution was made open source in September 2018 and the wallet manager went live on public mainnet in November 2018."
        discription2=""
        color="rgb(2, 182, 124)"
        image="https://miro.medium.com/max/1400/1*LmoPuOiGU4GIxkJ-VtnNVg.png"
        reverse
      />
      <PortfolioProject
        title="Mevris"
        discription1="Enjoy the most comprehensive IOT platform that is secure, reliable, scale-able and flexible while connecting all your devices and appliances together. Get IOT solutions that are faster and better than ever before!"
        discription2="Successful integration of a chatbot algorithm that helps user control devices and appliances by chatting with them in real-time.

"
        color="rgb(28, 44, 65)"
        image="https://cdn.shopify.com/s/files/1/0278/7052/7560/files/iot-ecosystem_2x_b6de9809-60d9-49ca-8fdd-22898c3a7bae.png?v=1597326629"
      />
      <PortfolioProject
        title="zhutravel"
        discription2=" In 2016, Zhutravel was born dedicated to create the perfect experience in Portugal & Spain for Chinese customer.In 2018, we expanded into offering taylor made solutions to government and business delegates in Portugal. We are in Portugal since 1983, there is no doubt we will find the right solution for you. In 2019, we started our daily tours in Portugal to share our love for the country and our passion to travel."
        color="rgb(28, 44, 65)"
        image="https://www.zhutravel.com/static/HelloDmc-49f0f9f8140fe41654e03f0400ff5d33.png"
        reverse
      />
      <PortfolioProject
        title="Veeve"
        discription2="Veeve's proprietary computer vision algorithms extracts visual features (produce & barcode items) for instant recognition. Swappable battery technology keeps the carts running all day. The cart can automatically capture the item weight and calculate price."
        color="rgb(28, 44, 65)"
        image="https://veeve.io/images/img-cart-veeve.png"
      />
      <PortfolioProject
        title="Lavoro"
        discription2="We design, develop and deliver beautiful websites and Mail Chimp. We design, develop and deliver beautiful websites and Mail ChimpWe design, develop and deliver beautiful websites and Mail Chimp"
        reverse
        color="rgb(28, 44, 65)"
        image="https://geoffreymultimedia.com/wp-content/uploads/2016/07/freelance-web-designer.png"
      />
      <Footer />
      <SocialMediaFooter />
    </Box>
  );
};
