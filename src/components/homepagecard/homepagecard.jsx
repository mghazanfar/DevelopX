import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import zhutravelimg from "../../assets/zhutravelimg.png";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  imgwidth: {
    maxWidth: "100%",
  },
  cardpadding: {
    padding: 80,
  },
  cardtitle: {
    fontSize: 28,
    fontWeight: 900,
    color: "#017aff",
  },
  discrptionfont: {
    fontSize: 20,
    fontWeight: 400,
    color: "#6b727f",
  },
  btnMargin: {
    marginBottom: 25,
    marginLeft: 20,
    marginTop: 20,
  },
  sightcard: {
    height: "100%",
  },
  imgheight: {
    height: 145,
  },
  root: {
    height: "100%",
  },
});

export default function HomePageCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container spacing={4} className={classes.cardpadding}>
      <Grid xs={12} sm={6} md={6} lg={6} item>
        <Card className={classes.root} elevation={12}>
          <CardContent>
            <img
              className={classes.imgwidth}
              src="https://www.hubii.com/wp-content/uploads/2018/05/hubii_core.png"
            />

            <Typography
              className={classes.cardtitle}
              variant="body2"
              component="p"
            >
              {props.title}
            </Typography>
            <Typography
              className={classes.discrptionfont}
              variant="body2"
              component="p"
            >
              {props.discrption}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid xs={12} sm={6} md={6} lg={6} item>
        <Card className={classes.sightcard} elevation={12}>
          <CardContent>
            <img className={classes.imgheight} src={zhutravelimg} />

            <Typography
              className={classes.cardtitle}
              variant="body2"
              component="p"
            >
              zhutravel
            </Typography>
            <Typography variant="body2" component="p">
              <Typography
                className={classes.discrptionfont}
                variant="body2"
                component="p"
              >
                In 2016, Zhutravel was born dedicated to create the perfect
                experience in Portugal & Spain for Chinese customer.In 2018, we
                expanded into offering taylor made solutions to government and
                business delegates in Portugal. We are in Portugal since 1983,
                there is no doubt we will find the right solution for you. In
                2019, we started our daily tours in Portugal to share our love
                for the country and our passion to travel.
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
