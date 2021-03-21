import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
/*Below we import the Components we created in the 'constants' directory.*/
import { CARD_STATUS, CARD_SIZES } from "../constants/index";

//styling below for the cards
const useStyles = createUseStyles({
  card: {
    padding: 1,
    borderRadius: 5,
    height: CARD_SIZES.height,
    width: CARD_SIZES.width,
    border: "darkSlateGrey 5px solid",
    position: "relative",
    transition: "all 0.4s linear",
    transformStyle: "preserve-3d",
    margin: "12px",
    "& div": {
      position: "absolute",
      backfaceVisibility: "hidden"
    }
  },
  selected: {
    borderColor: "lightSalmon",
    transform: "rotateY(180deg)",
    padding: "5",
  },
  front: {
    transform: "rotateY(180deg)"
  },
  matched: {
    borderColor: "cadetblue",
    backgroundColor: "cadetblue",
    transform: "rotateY(180deg)"
  },
  back: {
    transform: "rotateY(180deg)",
    top: "25%",
    left: "35%"
  }
});

const Card = ({ data, handleClick, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { id, url, status } = data;
  const classes = useStyles();
  //checks if card is selected, and CARD_STATUS.SELECTED is pulled from constants/index.js
  const isSelected = status === CARD_STATUS.SELECTED;
  //checks if card is selected, and CARD_STATUS.MATCHED is pulled from constants/index.js
  const isMatched = status === CARD_STATUS.MATCHED;

  const onCardClick = () => {
    if (status === CARD_STATUS.HIDDEN) {
      handleClick(index, id);
    }
  };
  //Loads image when the card is clicked on
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  //load image onCardClick
  return (
    <div
      className={classnames(classes.card, {
        [classes.selected]: isSelected,
        [classes.matched]: isMatched
      })}
      onClick={onCardClick}
    >
      <div className={classes.front}>
        <img src={url} alt="card" onLoad={handleImageLoad} />
      </div>
      <div className={classes.back}>{!isLoaded && "Loading"}</div>
    </div>
  );
};
/* To be able to use the code that we have written in this module in a different module (e.g. App.js),
we have to export the code that we want to make available outside of this module. Below we export the function called 'Card'.
Notice how we import this function in App.js. Every 'import' statement must match an 'export' statement in the module we want to expose. */
export default Card;
