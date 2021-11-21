import React from "react";
import DevelopxAppBar from "../../components/appbar/appbar";
import { makeStyles, Box, Grid } from "@material-ui/core";
import Careers from "../../components/careercard/careercard";
const useStyles = makeStyles({
  titlefont: {
    fontFamily: "none",
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
  containerpadding: {
    padding: "78px",
    paddingBottom: 0,
  },
});
export const Career = (props) => {
  const classes = useStyles();
  return (
    <Box
      bgcolor="rgb(224 227 237)"
      minHeight="100vh"
      padding={"20px 5px"}
      style={{ overflowX: "hidden" }}
    >
      <DevelopxAppBar selected="4" />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box className={classes.titlefont}>Careers</Box>
        <Box className={classes.subtitle}>
          The Developx team lives and breathes cutting-edge technology. Apply to
          join our proactive, high energy, collaborative, and growing team.
        </Box>
        <Grid
          container
          spacing={3}
          elevation={14}
          className={classes.containerpadding}
        >
          <Grid item xs={12} lg={4}>
            <Careers
              date="2nd November, 2020"
              city="- Remote, PK"
              jobprogram="Fullstack Javascript Engineer"
              btnleft="Technology"
              btnright="Read More"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Careers
              date=" 2nd November, 2020"
              city="- Remote, PK"
              jobprogram="Frontend Engineer"
              btnleft="Technology"
              btnright=" Read More"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Careers
              date="2nd November, 2020"
              city="- Remote, PK"
              jobprogram="Backend Engineer"
              btnleft="Technology"
              btnright=" Read More"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Careers
              date="2nd November, 2020"
              city="- Remote, PK"
              jobprogram="ReactJS Frontend Engineer"
              btnleft="Technology"
              btnright="Read More"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Careers
              date="8th October 2020"
              city="- Lahore, PK"
              jobprogram="Developx Internship Program"
              btnleft="Technology"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Careers
              date="2nd November, 2020"
              city="- Remote, PK"
              jobprogram="Developx Internship Program"
              btnleft="  Technology"
              btnright=" Read More"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
