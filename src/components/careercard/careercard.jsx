import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  texttransform: {
    textTransform: "capitalize",
  },

  btnclr: {
    fontSize: 18,
    fontWeight: 400,
    color: "#017aff",
  },
  btnflex: {
    display: "flex",
    justifyContent: " space-between",
    padding: 14,
  },
  btnfontSize: {
    fontSize: 12,
    color: "#017aff",
    borderRadius: 19,
    backgroundColor: "#dbeaff",
    border: " 1px solid transparent",
    padding: 6,
    fontFamily: "auto",
  },
  btnfontfamily: {
    fontSize: 12,
    fontWeight: 600,
  },
});

export default function Careers(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card>
      <CardContent>
        <Box>
          <Typography color="textSecondary">{props.date}</Typography>
          <Typography className={classes.texttransform}>
            {props.city}
          </Typography>
        </Box>
        <Box className={[classes.texttransform, classes.btnclr]}>
          {props.jobprogram}
        </Box>
      </CardContent>

      <Box className={classes.btnflex}>
        <Box className={[classes.texttransform, classes.btnfontSize]}>
          {props.btnleft}
        </Box>
        <Button
          className={[classes.texttransform, classes.btnfontfamily]}
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=careers@developx.tech&tf=1"
          target="_blank"
        >
          Apply
        </Button>
      </Box>
    </Card>
  );
}
