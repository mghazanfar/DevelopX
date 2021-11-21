import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const PortfolioProject = (props) => {
  const useStyles = makeStyles((theme) => ({
    bgcolor: {
      backgroundColor: props.color,
      transform: "rotate(45deg)",
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
      fontFamily: "MyFontRegular",
    },
    subtitle: {
      fontWeight: 900,
      fontSize: 35,
      lineHeight: 1.14,
    },
    bgcard: {
      width: "118%",
      padding: 20,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      boxShadow: "rgba(0, 0, 0, 0.3) 10px 10px 30px 0px;",
      marginLeft: props.reverse ? -150 : 150,
    },
    discription: {
      fontWeight: 400,
      fontFamily: "MyFontRegular",
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
    tech: {
      height: 20,
      marginRight: 8,
      marginTop: 16,
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
        marginTop: props.isFirst ? 150 : 250,
      }}
    >
      <Grid item xs={6} sm={4}>
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

            {props.skills && <h3 style={{color:props.color}}>Technologies:</h3>}

            <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
              {props.skills &&
                props.skills.map((skill) => (
                  <img src={skill} alt="technology" className={classes.tech} />
                ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.bgcolor} item xs={8}></Grid>
    </Grid>
  );
};
