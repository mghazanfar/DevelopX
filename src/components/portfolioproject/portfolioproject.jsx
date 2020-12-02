import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const PortfolioProject = (props) => {
  const useStyles = makeStyles((theme) => ({
    bgcolor: {
      backgroundColor: props.color,
      transform: props.reverse ? "rotate(45deg)" : "rotate(45deg)",
      padding: "22%",
      borderRadius: 800,
      height: "93vh",
      zIndex: -2,
      backgroundImage: `url(${props.image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
    },
    titlemargn: {
      display: "flex",
      textAlign: "center",
      alignItems: "center",
    },
    titlefont: {
      color: props.color,
      marginLeft: 15,
      fontSize: 20,
      fontWeight: 900,
      fontFamily: "revert",
    },
    subtitle: {
      fontWeight: 900,
      fontSize: 35,
      lineHeight: 1.14,
    },
    bgcard: {
      width: "118%",
      height: "50%",
      backgroundColor: "transparent",
      padding: 20,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      boxShadow: "rgba(0, 0, 0, 0.3) 10px 10px 30px 0px;",
      marginLeft: props.reverse ? -150 : 150,
    },
    discription: {
      fontWeight: 400,

      fontSize: 20,
      lineHeight: 1.2,
    },
    paramargin: {
      marginTop: 10,
      Color: "rgba(5, 22, 34,0.6)",
    },
    imgrotate: {
      transform: " rotate(-45deg)",
    },
    linedrawer: {
      backgroundColor: props.color,
      width: 35,
      height: 3,
    },
  }));
  const classes = useStyles();
  return (
    <Grid
      container
      style={{
        flexDirection: props.reverse ? "row-reverse" : "row",
        marginTop: 250,
      }}
    >
      <Grid item xs={4}>
        <Card className={classes.bgcard}>
          <CardContent>
            <Typography>
              <Box className={classes.titlemargn}>
                <Box className={classes.linedrawer} />
                <Box className={classes.titlefont}>{props.title}</Box>
              </Box>
            </Typography>

            <Typography className={classes.subtitle}>
              {props.subtitle}
            </Typography>
            <Typography className={[classes.discription, classes.paramargin]}>
              {props.discription1}
            </Typography>
            <Typography className={[classes.discription, classes.paramargin]}>
              {props.discription2}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.bgcolor} item xs={8}></Grid>
    </Grid>
  );
};
