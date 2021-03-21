import React from "react";
import { createUseStyles } from "react-jss";

//styling below for the popup banner when the player has won
const useStyles = createUseStyles({
  root: {
    position: "fixed",
    display: "grid",
    top: "30%",
    left: "25%",
    width: "50%",
    height: 200,
    background: "grey",
    border: "solid 4px darkGrey",
    color: "white",
    justifyItems: "center",
    alignItems: "center"
  },
  button: {
    background: "cadetblue",
    border: "solid 1px white",
    color: "white",
    padding: "16px 28px"
  }
});

const Banner = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>Congratulations, you've won!</div>
      <button className={classes.button} onClick={handleClick}>
        Play Again
      </button>
    </div>
  );
};
/* To be able to use the code that we have written in this module in a different module (e.g. App.js),
we have to export the code that we want to make available outside of this module. Below we export the function called 'Banner'.
Notice how we import this function in App.js. Every 'import' statement must match an 'export' statement in the module we want to expose. */
export default Banner;