import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { PortfolioProject } from "../../components/portfolioproject/portfolioproject";
import DevelopxAppBar from "../../components/appbar/appbar";
import { Footer } from "../../components/footer/footer";
import { SocialMediaFooter } from "../../components/socialmediafooter/socialmediafooter";
import react from '../../assets/react.png'
import aa from '../../assets/aa.png'
import gm from '../../assets/gm.png'
import expo from '../../assets/expo.png'
import nb from '../../assets/nb.png'
import gatsby from '../../assets/gatsby.png'
import mb from '../../assets/mb.png'
import ad from '../../assets/ad.png'
import ws from '../../assets/ws.jpeg'
import mui from '../../assets/mui.svg'
import hc from '../../assets/hc.png'
import ap from '../../assets/ap.png'
import at from '../../assets/at.svg'
import bootstrap from '../../assets/boostrap.png'
import cv from '../../assets/cv.png'
import aws from '../../assets/aws.png'
import ups from '../../assets/ups.png'
import gp from '../../assets/gp.png'
import gql from '../../assets/gql.png'
import js from '../../assets/js.png'
import ts from '../../assets/ts.png'
import lp from '../../assets/lp.png'
import mongo from '../../assets/mongo.png'
import node from '../../assets/node.png'
import pp from '../../assets/pp.png'
import venia from '../../assets/venia.png'
import vue from '../../assets/vue.png'
import bc from '../../assets/bc.png'

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
  titlefont: {
    fontSize: 50,
    fontWeight: "bolder",
    textAlign: "center",
    fontFamily: "MyFontRegular",
  },
  subtitle: {
    color: "grey",
    fontSize: 23,
    lineHeight: 2,
    textAlign: "center",
    fontFamily: "MyFontRegular",
    width: "60%",
  },
}));

export const PortfolioPage = (props) => {
  return (
    <Box>
      <DevelopxAppBar selected="2" color="black" />
      <Box textAlign="center" marginTop="50px" fontSize="xx-large">Our Clients</Box>
        <PortfolioProject
          title=" Shoebacca"
          discription2="SHOEBACCA.COM got its very humble beginnings when two community-minded brothers named Marc and Robert Schlachter started selling used name-brand athletic shoes to underprivileged families at local neighborhood markets. Along with those early grass-roots efforts, they also shipped truckloads of shoes to areas all over the world, primarily to third-world countries where the need was greatest. This became the inspiration for SHOEBACCA.com, and helped set the tone for this new business and outreach program. Officially formed in 2002, SHOEBACCA.com identified an opportunity to extend its reach by establishing itself as a reseller on eBay. After a number of successful years operating on eBay's platform, SHOEBACCA.com launched a full-scale retail website in the spring of 2007. Through word of mouth, SHOEBACCA.com quickly became a leader in the online footwear retail market, offering thousands of styles by many of the world's best shoe brands at competitive prices. Attention was immediately placed on growth through proper placement, innovative technologies, competitive shipping processes, and professional customer service. SHOEBACCA.com is located in Irving, Texas with its home office and adjacent 250,000 square-foot warehouse. At any given time, there are as many as 25,000 styles of shoes, accessories, and athletic gear housed within the Irving facility."
          color="orange"
          image={require("../../assets/shoebacca.jpeg")}
          skills={[react,js,node,gql,venia,mongo,bootstrap,at,aa,ap,gp,pp,ups]}
          isFirst
        />

      <PortfolioProject
        title=" Ecency"
        discription2="Ecency is a blockchain based social network - powered by Hive. Ecency is home of free speech and rewarding communities for content creators. Project is founded by @good-karma in August 2016 as an alternative social network that's uncensored, user controled, immutable and opensource. Currently there are many independent and voluntary contributors wanting to keep vision and spirit of free speech. Ecency helps onboarding masses into Blockchain technology where users are getting paid for their time, resources and learn while enjoying social aspects of blockchain. Through ease of use, users not only learn but also become investors, innovators of the new internet."
        reverse
        color="#2670df"
        image={require("../../assets/ecency.png")}
        skills={[react,js,node, ts, mongo, bootstrap,bc,hc]}
      />

      <PortfolioProject
        title=" Ocuco"
        discription2="Ocuco is the largest optical retail software company in the world. Over 7,500 sites in 77 countries use Ocuco’s software and services. The company has over 200 staff based in the US, Canada, Ireland, England, Wales, France, Italy, Sweden, Norway, Denmark, The Netherlands, Spain, Australia and China."
        color="#ec691b"
        image={require("../../assets/ocuco.jpeg")}
        skills={[react,js,node, ts, mongo, bootstrap,hc]}
      />
      
      <PortfolioProject
        title=" PackageX"
        discription1="PackageX powers the future of digital and contactless mailroom and transforms the end-user experience. PackageX uses machine vision to track packages and assets with a simple photo across industries, including higher education, real estate, and co-working spaces."
        color="crimson"
        image={require("../../assets/px.webp")}
        reverse
        skills={[react,js,node, mongo, mui,hc, aws, ]}
      />
      <PortfolioProject
        title=" Hubbi core"
        discription1="hubbi core is focused on user friendliness and combines a wallet manager and exchange. The solution was made open source in September 2018 and the wallet manager went live on public mainnet in November 2018."
        discription2=""
        color="darkturquoise"
        image={require("../../assets/hubii.png")}
        skills={[react,js,node, ts, mongo,bc, hc]}
      />
      <PortfolioProject
        title="Mevris"
        discription1="Enjoy the most comprehensive IOT platform that is secure, reliable, scale-able and flexible while connecting all your devices and appliances together. Get IOT solutions that are faster and better than ever before!"
        discription2="Successful integration of a chatbot algorithm that helps user control devices and appliances by chatting with them in real-time."
        color="darkslateblue"
        image={require("../../assets/mevris.jpeg")}
        reverse
        skills={[react,js,node,lp, ts, mongo, bootstrap,hc, gm, aws,nb, expo ]}
              />
      <PortfolioProject
        title=" zhutravel"
        discription2=" In 2016, Zhutravel was born dedicated to create the perfect experience in Portugal & Spain for Chinese customer.In 2018, we expanded into offering taylor made solutions to government and business delegates in Portugal. We are in Portugal since 1983, there is no doubt we will find the right solution for you. In 2019, we started our daily tours in Portugal to share our love for the country and our passion to travel."
        color="#65b5b9"
        image="https://www.zhutravel.com/static/HelloDmc-49f0f9f8140fe41654e03f0400ff5d33.png"
        skills={[react,js,node, mongo,mui, mb,gatsby ]}
      />
      <PortfolioProject
        title=" Veeve"
        discription2="Veeve's proprietary computer vision algorithms extracts visual features (produce & barcode items) for instant recognition. Swappable battery technology keeps the carts running all day. The cart can automatically capture the item weight and calculate price."
        color="black"
        image="https://veeve.io/images/img-cart-veeve.png"
        skills={[react,js,node, mongo,mui, nb, ws,expo ]}
        reverse
      />
      <PortfolioProject
        title=" Bridger"
        discription2="Bridger Solutions is an online resource for brokers designed to help them write better business
        and earn more money. Areas of focus include, policy system training, mobile app setup,
        FAQs and much more."
        color="#1e9ad7"
        image={require("../../assets/bridger.jpeg")}
        skills={[react,expo,js,node, mongo, nb]}
      />
      <Box marginBottom="200px">
      </Box>
      <Footer />
      <SocialMediaFooter />
    </Box>
  );
};
