import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Help from './Help';
import '../App.css';
import Game from './Game';

//The below displays the drop-down menu.
//Each menu item routes/ links to the corresponding component.
function Dropdowns() {
    return (
      <div className="App container">  
        <Dropdown menuAlign="center" className="Dropdown">
          <Dropdown.Toggle variant="info" id="dropdown-basic">
          Menu
          </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/Game" component={Game}>Game</Dropdown.Item>
              <Dropdown.Item href="/Help" component={Help}>Help</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
/* To be able to use the code that we have written in this module in a different module (e.g. App.js),
we have to export the code that we want to make available outside of this module. Below we export the function called 'Dropdowns'.
Notice how we import this function in App.js. Every 'import' statement must match an 'export' statement in the module we want to expose. */
export default Dropdowns;