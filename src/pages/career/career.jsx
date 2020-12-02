import React from "react";
import DevelopxAppBar from "../../components/appbar/appbar";
import { makeStyles, Box, Grid } from "@material-ui/core";
import Careers from "../../components/careercard/careercard";
const useStyles = makeStyles({
  titlefont: {
    fontFamily: "none",
    fontSize: 50,
    fontWeight: " bolder",
    textAlign: " center",
  },
  subtitle: {
    color: "grey",
    fontSize: 23,
    lineHeight: 3,
    textAlign: "center",
  },
  containerpadding: {
    padding: "78px",
  },
});
export const Career = (props) => {
  const classes = useStyles();
  return (
    <div>
      <DevelopxAppBar selected="4" />
      <Box>
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
              date="8 October 2020"
              city="-Remote,PK"
              jobprogram="Developx Internship Program"
              btnleft="Technology"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Careers
              date="8 October 2020"
              city="    -Remote,PK"
              jobprogram=" Developx Internship Program"
              btnleft="  Technology"
              btnright=" Read More"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Careers
              date="8 October 2020"
              city="    -Remote,PK"
              jobprogram=" Developx Internship Program"
              btnleft="  Technology"
              btnright=" Read More"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Careers
              date=" 8 October 2020"
              city="   -Remote ,PK"
              jobprogram=" Developx Internship Program"
              btnleft="  Technology"
              btnright=" Read More"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Careers
              date="8 October 2020"
              city="    -Remote,PK"
              jobprogram=" Developx Internship Program"
              btnleft="  Technology"
              btnright=" Read More"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Careers
              date="8 October 2020"
              city="   -Remote,PK"
              jobprogram=" Developx Internship Program"
              btnleft="  Technology"
              btnright=" Read More"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
