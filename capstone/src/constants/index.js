export const CARD_SIZES = { width: 210, height: 310 };
export const DECK_SIZE = 12;
//setting the card sizes and the number of cards in the grid.

//status to determine if the game is in progress, creating, resetting or finished
export const GAME_STATUS = {
  IN_PROGRESS: "IN_PROGRESS",
  CREATING: "CREATING",
  RESETTING: "RESETTING",
  FINISHED: "FINISHED"
};

//status to determine if the card is selected, matched or hidden
export const CARD_STATUS = {
  SELECTED: "SELECTED",
  MATCHED: "MATCHED",
  HIDDEN: "HIDDEN"
};