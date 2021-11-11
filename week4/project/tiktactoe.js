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
  ['midL', 'midM', 'midR'],
];

const resetGame = () => {
  arrayOfBoardSquaresIds.forEach((square) => {
    boardGameState[square].value = undefined;
    document.getElementById(square).innerText = '';
  });
}

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
      // check if the square state is undefined
      // if it is add data to it
      if (boardGameState[square].value === undefined) {
      
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

          // grab the current-turn element and save it for later
          const currentTurnElement = document.getElementById('current-turn');
          if (isCurrentlyXTurn) {
            // set the element's innerText to X if it's X's turn
            currentTurnElement.innerText = 'X';
          } else {
            // set the element's innerText to O if it's NOT X's turn
            currentTurnElement.innerText = 'O';
          }
          
        } else {
          // define a string to alert to the user who the winner is
          let winnerMessage = 'The winner is ';

          if (isCurrentlyXTurn) {
            // Add X to the message if it's X's turn
            winnerMessage += 'X';
          } else {
            // Add X to the message if it's NOT X's turn
            winnerMessage += 'O';
          }

          // alert the user who won with the concatenated message
          alert(winnerMessage);
        }
      }
    });

    // set up the board game state
    boardGameState[square] = {
      value: undefined
    }
  });

  document.getElementById('reset-btn').addEventListener('click', resetGame);
  document.getElementById('forfit-btn').addEventListener('click', () => {
     // define a string to alert to the user who the winner is
    let loserMessage = 'The loser is ';

    if (isCurrentlyXTurn) {
      // Add X to the message if it's X's turn
      loserMessage += 'X';
    } else {
      // Add X to the message if it's NOT X's turn
      loserMessage += 'O';
    }

    // alert the user who lost with the concatenated message
    alert(loserMessage);
    resetGame();
  });
};

// setting an event listener on the window to load the game.
window.addEventListener('load', onLoad);
