import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ContactImg from "../../assets/contact.svg";
import CardContent from "@material-ui/core/CardContent";
import ColorButton from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Box, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardpadding: {
    padding: "10%",
    textAlign: "center",
  },
  titlefont: {
    fontSize: 50,
    color: "white",
    fontWeight: 900,
    lineHeight: 1.14,
  },
  bgclr: {
    backgroundColor: "#29240994",
    backgroundImage: `url(${ContactImg})`,
    backgroundSize: "64%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  },
  dflex: {
    display: "flex",
    fontSize: 14,
    paddingLeft: "26%",
    paddingTop: 35,
    marginLeft: 30,
    color: "#ff5e6c;",
  },
  inputwidth: {
    height: 29,
    width: "47%",
    marginLeft: 60,
    marginTop: 6,
    border: "1px solid black",
  },
  inputheight: {
    height: 74,
    width: "47%",
    marginLeft: 60,
    marginTop: 6,
    border: "1px solid black",
  },
  namefont: {
    fontSize: 12,
    paddingLeft: "26%",
  },
  fontSize: {
    fontSize: 12,
    color: "#ff5e6c;",
  },
  textfnt: {
    color: "#ff5e6c",
    fontSize: 16,
    marginTop: 20,
  },
  btnFnt: {
    backgroundolor: "#ff5e6c",
    fontSize: 12,
    marginTop: 32,
    padding: 9,
    paddingLeft: 25,
    paddingRight: 25,
    textTransform: "capitalize",
    borderRadius: 5,
    width: 20,
  },
}));

export default function GetInTouch() {
  const classes = useStyles();

  return (
    <Grid container justify="center" component={Box} mt={20}>
      <Grid xs={11} md={8} item>
        <Card className={classes.bgclr} id="contact" elevation={14}>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              className={classes.titlefont}
              variant="h5"
              component="h2"
            >
              Get in Touch
            </Typography>
            <Box width="55%">
              <TextField
                color="secondary"
                label="Name"
                fullWidth
                margin="normal"
                autoFocus={window.location.hash.includes("contact")}
              />
              <TextField
                color="secondary"
                label="Email"
                fullWidth
                margin="normal"
              />
              <TextField
                color="secondary"
                label="Message"
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
              <ColorButton
                variant="contained"
                color="secondary"
                className={classes.btnFnt}
                fullWidth
              >
                Send
              </ColorButton>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
