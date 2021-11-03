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
  'midM',
  'midR'
];

/*
  the addO function requires two arguments:
    1. the event's target (the item that was clicked on)
    2. the item that was iterated over

  the addO function will set the innerText of the element to an O
  the addO function will set the value in the boardGameState
*/
const addO = (element, key) => {
  boardGameState[key].value = 'O';
  element.innerText = 'O';
};

/*
  the addX function requires two arguments:
    1. the event's target (the item that was clicked on)
    2. the item that was iterated over

  the addX function will set the innerText of the element to an O
  the addX function will set the value in the boardGameState
*/
const addX = (element, key) => {
  boardGameState[key].value = 'X';
  element.innerText = 'X';
};

const waysToWin = [
  ['topL', 'topM', 'topR'],
  ['midL', 'midM', 'midR']
];

/*
  isGameOver it will determine if the game is over

  it will return which user (X or O) won;


  There are a total of 8 ways to win in tiktactoe
    - topL, topM, topR
    - midL, midM, midR
*/
const isGameOver = () => {

  const winsArrays = waysToWin.map((arrayOfSquares) => {
    // item is currently equal to an array
    // this array has a length of 3.
    const gameIsOver = arrayOfSquares.every((item) => {
      if (isCurrentlyXTurn) {
        return boardGameState[item].value === 'X'; 
      } 

      // No need for an else because if it was X's turn this function would 
      // have returned and been finsihed already
      return boardGameState[item].value === 'O'; 
    });
  
    return gameIsOver;
  });

  /*
    array.some returns true if one of the values are true.

    the provided function simply returns the value
      as it'll be either true or false
  */
  return winsArrays.some((element) => element);
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
  arrayOfBoardSquaresIds.forEach((square) => {
   
    // add an event listener
    document.getElementById(square).addEventListener('click', (event) => {
      
      // check who's turn it is
      if (isCurrentlyXTurn) {
        console.log('its X turn');
        addX(event.target, square);
      } else {
        console.log('its O turn');
        addO(event.target, square);
      }

      // check if the game is over after every turn
      const theGameIsOver = isGameOver();

      console.log('the game is over: ', theGameIsOver);

      if (!theGameIsOver) {
        // flip the value of who's turn to the other one
        isCurrentlyXTurn = !isCurrentlyXTurn;
      }
    });

    // set up the board game state
    boardGameState[square] = {
      value: undefined
    }

  });

};

// setting an event listener on the window to load the game.
window.addEventListener('load', onLoad);
