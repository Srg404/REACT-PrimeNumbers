import './index.scss';

import Board from '../../components/Board';
import Keyboard from '../../components/Keyboard';
import data from '../../data/init.json';
import { useEffect, useState } from 'react';
import UsePrimeNumber from '../../hooks/UsePrimeNumber';
import UseDeepCopy from '../../hooks/UseDeepCopy';
import Result from '../../components/Board/Result';

let gameRound = 0;
let gamePosition = 0;

function Game({mode}) {
  const [play, setPlay] = useState(true);
  const [result, setResult] = useState(0);
  const [boardArray, setBoardArray] = useState([]);

  useEffect(() => {
    // generate the Prime Number
    generatePrimeNumber();
    // Set Board
    initBoard();
  }, [mode]); // eslint-disable-line

  function generatePrimeNumber() {
    switch (mode) {
      case 'easy':
        setResult(primeNumber(5));
        break;
      case 'hard':
        setResult(primeNumber(7));
        break;
      default:
        // 'medium'
        setResult(primeNumber(6));
        break;
    }
  }

  function primeNumber(numLength) {
    let num = 0;
    while (num.toString().length !== numLength) {
      num = UsePrimeNumber(parseInt(Math.random().toString().slice(2, numLength + 2)));
    }
    return num;
  }

  function initBoard() {
    setBoardArray(UseDeepCopy(data)[mode]);
    gameRound = 0;
    gamePosition = 0;
  }

  // The game running
  function game(keyVal) {
    console.log("game, keyval : ",keyVal);
    // If key is a number :
    ((parseInt(keyVal) >= 0) && (parseInt(keyVal) <= 9)) && addNum(keyVal);
    // If key is Backspace :
    ((keyVal === "Backspace") && (gamePosition > 0)) && removeNum();
    // If key is Enter :
    (keyVal === "Enter") && checkRow();
  }

  // When the user push on a number key
  function addNum(keyVal) {
    if (gamePosition < boardArray[0].length) {
      const currentRow = boardArray[gameRound];
      currentRow[gamePosition][0] = "neutral";
      currentRow[gamePosition][1] = keyVal;
      gamePosition = (gamePosition === currentRow.length) ? gamePosition : gamePosition + 1;
      updateBoardRow(currentRow, gameRound);
    }
  }

  // When the user push on remove key
  function removeNum() {
    if (gamePosition > 0) {
      const currentRow = boardArray[gameRound];
      gamePosition--;
      currentRow[gamePosition][0] = "empty";
      currentRow[gamePosition][1] = "0";
      updateBoardRow(currentRow, gameRound);
    }
  }

  // When the user push on enter key
  function checkRow() {
    if ((gameRound < boardArray.length) && (gamePosition === boardArray[0].length)) {

      const currentRow = boardArray[gameRound];
      const resultArray = result.toString().split("");

      // Possible Value : "empty" "neutral" "exist" "ok" 

      let resultOnlyNotOK = [];

      let newRow = currentRow.map((el, index) => {
        // Test if is the correct number at this place and add number if not ok in an accumulator
        if (el[1] === resultArray[index]) {
          return ["ok", el[1]];
        } else {
          resultOnlyNotOK.push(resultArray[index]);
          return ["neutral", el[1]];
        }
      }).map((el) => {
        // Test if the number exist in acumulator 
        if (el[0] !== "ok") {
          if (resultOnlyNotOK.includes(el[1])) {
            return ["exist", el[1]];
          }
        } 
        return el;
      });

      updateBoardRow(newRow, gameRound);

      gamePosition = 0;
      gameRound++;

      if (newRow.every((el) => el[0] === "ok")) {
        console.log('You win!');
        gameRound = boardArray.length;
      }
    }

    if (gameRound === boardArray.length) {
      console.log('Game over');
      setPlay(false);
      // init Board

    }
  }

  // update the board with the new row
  function updateBoardRow(currentRow, gameRound) {
    setBoardArray(boardArray => boardArray.map((el, index) => {
      if (gameRound === index) {
        return currentRow;
      }
      return el
    }));
  }

  function playAgain() {
    setPlay(true);
    initBoard();
    generatePrimeNumber();
  }

  // Get the values of keyboard keys
  useEffect(() => {
    function handleKeyUp(e) {
      game(e.key);
    }
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  },[]); // eslint-disable-line 

  return (
    <div className="game">
      {!play && <Result result={result} playAgain={playAgain}/>}

      <Board
        boardArray={boardArray}
        setBoardArray={setBoardArray}
      />
      <Keyboard
        game={game}
      />
    </div>
  );
}

export default Game;