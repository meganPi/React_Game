import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Button from 'react-bootstrap/Button'
import '../App.css';
/*Below we import all the Components we created in the 'Components' directory.
Remember that you can only import components, if you have added an export statement to the module
which defines the component. */
import GameBoard from "./GameBoard";
import Banner from "./Banner";
import { GAME_STATUS } from "../constants/index";

//styles for the header created below.
const useStyles = createUseStyles({
  header: {
    textAlign: "center",
    fontFamily: "courier",
    fontSize: "20px"
  }
});
/*Game status fetched from constants/index.js which determines whether the game is finished, resetting or
in progress */
const Game = () => {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.CREATING);
  const classes = useStyles();

  const gameFinished = () => {
    setGameStatus(GAME_STATUS.FINISHED);
  };

  const resetGame = () => {
    setGameStatus(GAME_STATUS.RESETTING);
  };

  const setGameToInProgress = () => {
    setGameStatus(GAME_STATUS.IN_PROGRESS);
  };

  return (
    <div>
      <div>
      <Button className="Restart" onClick={() => window.location.reload(false)} variant="dark">Restart</Button>
        <GameBoard
          gameStatus={gameStatus}
          handleStart={setGameToInProgress}
          handleFinish={gameFinished}
        />
        {gameStatus === GAME_STATUS.FINISHED && (
          <Banner handleClick={resetGame} />
        )}
      </div>
    </div>
  );
};
//Notice that the App class of this module is exported. This is so that it can be imported and used in Index.js where the ReactDom.Render() method is called
//to render this App component.
export default Game;