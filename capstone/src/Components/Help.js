import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Help.css';

class Help extends Component {
    render () {
        return (
            <div className="HelpBody">
            <header>
              <h1 className="HelpHeader ">How to play the game:</h1>
            </header>
                <h5>Younger players are often able to compete with older players because they can be very good at memory-based games.</h5>
                <ul>
                <li>The objective is to collect the most pairs of cards.</li>
                <li>Shuffle the cards and lay them on the table, face down, in rows.</li>
                <li>The youngest player goes first. Play then continues in a clockwise direction.</li>
                <li>On each turn, a player turns over any two cards (one at a time) and keeps them if the cards match (for instance, two kings)</li>
                <li>If they successfully match a pair they get to keep the cards, and that player gets another turn.</li>
                <li>When a player turns over two cards that do not match, those cards are turned face down again (in the same position) and it becomes the next player’s turn.</li>
                <li>The trick is to remember which cards are where.</li>
                <li>The person with the most pairs at the end of the game wins.</li>
            </ul>
            </div>
    );
  };
}
  /* To be able to use the code that we have written in this module in a different module (e.g. App.js),
  we have to export the code that we want to make available outside of this module. Below we export the function called 'Banner'.
  Notice how we import this function in App.js. Every 'import' statement must match an 'export' statement in the module we want to expose. */
  export default Help;