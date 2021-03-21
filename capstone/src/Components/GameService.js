import { CARD_STATUS, DECK_SIZE, CARD_SIZES } from "../constants/index";

//Images fetched from picsum photos
const BASE_URL = "https://picsum.photos";
const LIMIT = Math.ceil(DECK_SIZE / 2);

/*** Create new game */
const gameService = () => {
  const urls = getRandomUrls();
  const deck = urls.concat(urls);

  while (deck.length > DECK_SIZE) {
    deck.pop();
  }

  const shuffledDeck = deck.sort(() => 0.5 - Math.random());
  //shuffles the deck randomly once a new game is created
  return shuffledDeck;
};

export const getRandomUrls = () => {
  const imageUrl = `${BASE_URL}/${CARD_SIZES.width}/${CARD_SIZES.height}?random=`;
  const urlArray = [];
//fetches random images from the URL specified above
  for (let index = 0; index < LIMIT; index++) {
    urlArray.push({
      id: index,
      url: imageUrl + index,
      status: CARD_STATUS.HIDDEN,
    });
  }

  return urlArray;
};

/**
 * Check if the game is completed
 * @param {Array} deck
 */
export const checkGame = (deck) => {
  const matches = Object.keys(deck).filter(
    (key) => deck[key].status === CARD_STATUS.MATCHED
  );

  return matches.length === DECK_SIZE - 1;
};
/* To be able to use the code that we have written in this module in a different module (e.g. App.js),
we have to export the code that we want to make available outside of this module. Below we export the function called 'gameService'.
Notice how we import this function in App.js. Every 'import' statement must match an 'export' statement in the module we want to expose. */
export default gameService;