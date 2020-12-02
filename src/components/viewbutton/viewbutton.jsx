import React from "react";
import { makeStyles } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import BootstrapButton from "@material-ui/core/Button";

export const ViewButton = ({
  showArrow,
  color,
  text,
  className,
  btnMargin,
  ...rest
}) => {
  const useStyles = makeStyles((theme) => ({
    titlemargn: {
      display: "flex",
      textAlign: "center",
      alignItems: "center",
    },

    btnfont: {
      fontWeight: 700,
      fontSize: 16,
      textTransform: "capitalize",
      fontFamily: "revert",
      backgroundColor: color || "#c89666",
      borderRadius: 22,
      padding: 10,
      paddingRight: 25,
      paddingLeft: 25,
      marginLeft: 80,
    },
    arrowfont: {
      marginLeft: 20,
      fontSize: 20,
    },
  }));
  const classes = useStyles();
  return (
    <BootstrapButton
      variant="contained"
      color="primary"
      disableRipple={true}
      className={[classes.margin, classes.btnfont, className, btnMargin]}
      {...rest}
    >
      <div style={{ textDecoration: "none" }}>{text}</div>
      {showArrow && <ArrowRightAltIcon className={classes.arrowfont} />}
    </BootstrapButton>
  );
};
