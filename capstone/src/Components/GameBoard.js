import React, { useState, useEffect, useCallback } from "react";
import { createUseStyles } from "react-jss";
/*Below we import all the Components we created in the 'Components' directory.*/
import Card from "./Card";
import GameService from "./GameService";
import { CARD_STATUS, GAME_STATUS, DECK_SIZE } from ".././constants/index";

const DELAY = 800;

//styling below for the board
const useStyles = createUseStyles({
  board: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    justifyItems: "center",
  },
});
//props set below for the cards on the board
const GameBoard = (props) => {
  const [deck, setDeck] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(false);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [count, setCount] = useState(0);
  const classes = useStyles();

  /**
   * Check if the all cards are matched and game is finished
   * @param {*} newDeck
   */
  const checkGameFinished = useCallback(() => {
    const matches = Object.keys(deck).filter(
      (key) => deck[key].status === CARD_STATUS.MATCHED
    );
    //if game is finished then handleFinish is called
    if (matches.length === DECK_SIZE) {
      props.handleFinish();
    }
  }, [deck, props]);

  /*** Check if the flipped cards match */
  const checkPair = useCallback(() => {
    if (firstCard && secondCard) {
      const first = { ...deck[firstCard.index] };
      const second = { ...deck[secondCard.index] };

      if (firstCard.id === secondCard.id) {
        first.status = CARD_STATUS.MATCHED;
        second.status = CARD_STATUS.MATCHED;
      } else {
        first.status = CARD_STATUS.HIDDEN;
        second.status = CARD_STATUS.HIDDEN;
      }

      const newDeck = {
        ...deck,
        [firstCard.index]: first,
        [secondCard.index]: second,
      };

      setTimeout(() => {
        setDeck(newDeck);
      }, DELAY);

      setTimeout(resetCards, DELAY);
    }
  }, [deck, firstCard, secondCard]);

  const resetCards = () => {
    setFirstCard(null);
    setSecondCard(null);
    setIsChecking(false);
  };

  /**
   *
   * @param {*} index
   * @param {*} status
   */
  const toggleCard = (index, status) => {
    const newDeck = { ...deck };
    const newCard = { ...newDeck[index] };

    newCard.status = status;
    newDeck[index] = newCard;

    setDeck(newDeck);
  };
    
  /* The event handler below calls the 'toggleCard' specified above. 
    This event handler is called in response to the handleClick event of the 
    Card component defined in the render() method below. */
  const handleClick = (index, id) => {
    if (!isChecking && count < 2) {
      const newCount = count + 1;
      const newCard = { index, id };
      setCount(newCount);

      if (newCount === 1) {
        setFirstCard(newCard);
      } else {
        setSecondCard(newCard);
        setIsChecking(true);
      }

      toggleCard(index, CARD_STATUS.SELECTED);
    }
  };

  useEffect(() => {
    if (count === 2) {
      setCount(0);
      checkPair();
    }
  }, [count, checkPair]);

  useEffect(() => {
    const { gameStatus } = props;

    // Initialise game
    if (
      gameStatus === GAME_STATUS.CREATING ||
      gameStatus === GAME_STATUS.RESETTING
    ) {
      setIsLoading(true);
      setDeck(GameService());
      setIsLoading(false);
      props.handleStart();
    } else if (gameStatus === GAME_STATUS.IN_PROGRESS) {
      checkGameFinished();
    }
  }, [checkGameFinished, props]);

  return (
    <div className={classes.board}>
      {isLoading
        ? "Loading..."
        //components rendered using array.Map()
        : Object.entries(deck).map(([key, value]) => {
            return (
              <Card
                key={key}
                index={key}
                data={value}
                handleClick={handleClick}
              />
            );
          })}
    </div>
  );
};
/* To be able to use the code that we have written in this module in a different module (e.g. App.js),
we have to export the code that we want to make available outside of this module. Below we export the function called 'GameBoard'.
Notice how we import this function in App.js. Every 'import' statement must match an 'export' statement in the module we want to expose. */
export default GameBoard;