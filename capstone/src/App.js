import React from "react";
import { createUseStyles } from "react-jss";
/*Below we import all the Components we created in the 'Components' directory.
Remember that you can only import components, if you have added an export statement to the module
which defines the component. */
//import GameBoard from "./Components/GameBoard";
//import Banner from "./Components/Banner";
import Help from './Components/Help';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dropdowns from './Components/Dropdown';
import Game from './Components/Game';


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
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <header className={classes.header}>
        <h1>Card Match Game</h1>
      </header>
      <div>
      <Router>
<div>
<Dropdowns />
      <Switch>
        <Route path='/Game' exact component={Game} />
        <Route path='/Help' component={Help} />
      </Switch>
</div>
</Router>
    </div>
    </div>
  );
};
//Notice that the App class of this module is exported. This is so that it can be imported and used in Index.js where the ReactDom.Render() method is called
//to render this App component.
export default App;
