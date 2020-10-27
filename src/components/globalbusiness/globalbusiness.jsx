import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import zhutravelimg from "../../assets/zhutravelimg.png";
const useStyles = makeStyles({
  titlefont: {
    color: "white",
    backgroundImage: "radial-gradient(#06eac0, transparent)",
    width: "100%",
    textAlign: "center",
    fontWeight: 900,
    marginTop: 91,
    paddingTop: 30,
  },
  imgheight: {
    maxHeight: 60,
  },
  dflex: {
    display: "flex",
    padding: 40,
    alignItems: "center",
  },
  imgsize: {
    height: 100,
  },
  mevrisheight: {
    height: 60,
  },
});

export default function GlobalBusiness() {
  const classes = useStyles();

  return (
    <Box className={classes.titlefont}>
      TRUSTED BY
      <Grid className={classes.dflex} spacing={4} container>
        <Grid xs={12} sm={3} md={6} lg={6} item>
          <img
            className={classes.imgheight}
            src="https://veeve.io/images/logo-sm.svg"
          />
        </Grid>
        <Grid xs={12} sm={3} md={6} lg={6} item>
          <Box fontSize={60} color="white" fontFamily="cursive">
            Lavoro
          </Box>
        </Grid>

        <Grid xs={12} sm={3} md={6} lg={6} item>
          <img
            className={classes.imgheight}
            src="https://www.hubii.com/wp-content/uploads/2018/05/hubii_core.png"
          />
        </Grid>

        <Grid xs={12} sm={3} md={6} lg={6} item>
          <img src="https://packagex.app/static/PX-logo-8b3db1d7ba148d53e8a18c1bbc9c2a2b.svg" />
        </Grid>
        <Grid xs={12} sm={3} md={6} lg={6} item>
          <img
            className={classes.mevrisheight}
            src="https://cdn.shopify.com/s/files/1/0366/2325/3635/t/2/assets/logo.svg?v=16040664564285682502"
          />
        </Grid>
        <Grid xs={12} sm={3} md={6} lg={6} item>
          <img className={classes.imgsize} src={zhutravelimg} />
        </Grid>
      </Grid>
    </Box>
  );
}
