// This value will be used to track who's turn it is
let isCurrentlyXTurn = false;

// we'll keep the state of the game here
const boardGameState = {};

// This will list all of our ids for the board game
const arrayOfBoardSquaresIds = [
  'topL',
  'topM',
  'topR',
  'midL',
  'midM'
];

/*
  the addO function requires two arguments:
    1. the event's target (the item that was clicked on)
    2. the item that was iterated over

  the addO function will set the innerText of the element to an O
  the addO function will set the value in the boardGameState
*/
const addO = (element, key) => {
  element.innerText = 'O';
  boardGameState[key].value = 'O';
};

/*
  the addX function requires two arguments:
    1. the event's target (the item that was clicked on)
    2. the item that was iterated over

  the addX function will set the innerText of the element to an O
  the addX function will set the value in the boardGameState
*/
const addX = (element, key) => {
  element.innerText = 'X';
  boardGameState[key].value = 'X';
};


/*
  the onload function we'll use to set up the game
*/
const onLoad = () => {
  console.log('Hey you loaded the game!');

  /* 
    map over all ids and for each of them we'll
      - add an event listener to the click event
      - set up the boardgame state
  */
  arrayOfBoardSquaresIds.forEach((item) => {
   
    // add an event listener
    document.getElementById(item).addEventListener('click', (event) => {
      
      // check who's turn it is
      if (isCurrentlyXTurn) {
        console.log('its X turn');
        addX(event.target, item);
      } else {
        console.log('its O turn');
        addO(event.target, item);
      }

      // flip the value of who's turn to the other one
      isCurrentlyXTurn = !isCurrentlyXTurn;
    });

    // set up the board game state
    boardGameState[item] = {
      value: undefined
    }

  });

};

// setting an event listener on the window to load the game.
window.addEventListener('load', onLoad);
