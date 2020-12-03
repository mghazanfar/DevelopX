import React from "react";
import { Box, makeStyles, IconButton, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  bgcolor: {
    color: "#f7f8fb",
  },
  iconheight: {
    width: 50,
    borderRadius: 25,
  },
  iconmargin: {
    marginRight: -28,
  },
  dflex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f7f8fb",
    paddingLeft: 124,
    paddingRight: 125,
  },
  addressfont: {
    fontSize: 20,
    fontWeight: 400,
    color: "#59606f",
  },
});

export const SocialMediaFooter = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justify="space-around"
      component={Box}
      bgcolor="#f7f8fb"
      p={4}
    >
      <Grid item xs={12} sm={6} md={5} className={classes.addressfont}>
        © 2020 DevelopX Technologies, Inc. All rights reserved.
      </Grid>
      <Grid item xs={12} sm={6} md={5}>
        <Box display="flex" flexWrap="wrap" justifyContent="flex-end">
          <IconButton disabled>
            <img
              className={classes.iconheight}
              src="https://t3.ftcdn.net/jpg/03/55/44/12/240_F_355441218_6WGdy8l7ioj7nYmiubYuSl3PUZa3Mk5I.jpg"
            />
          </IconButton>

          <IconButton disabled>
            <img
              className={classes.iconheight}
              src="https://t4.ftcdn.net/jpg/03/55/82/99/240_F_355829900_j65FCzRYlQ0CoCCcroralqNiehTXzIKY.jpg"
            />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/company/developx-tech/"
            target="blank"
          >
            <img
              className={classes.iconheight}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJO45msUOXwAm2ajZTDLznzkec0csKNMpQEA&usqp=CAU"
            />
          </IconButton>

          <IconButton disabled>
            <img
              className={classes.iconheight}
              src="https://t4.ftcdn.net/jpg/03/54/82/19/240_F_354821928_IPj5kHBaqTiBuiKnZwH0LraYiRcxaaAj.jpg"
            />
          </IconButton>
          <IconButton disabled>
            <img
              className={classes.iconheight}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6KYd8qhqe0PkWaTvBqfhtdWsU1lpsnpyCWg&usqp=CAU"
            />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};
