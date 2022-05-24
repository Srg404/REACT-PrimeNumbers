import './App.scss';
import Board from './components/Board';
import Header from './components/Header';
import Keyboard from './components/Keyboard';
import Menu from './components/Menu';
import Setting from './components/Setting';
import data from './data/init.json';
import { useEffect, useState } from 'react';
import UsePrimeNumber from './hooks/UsePrimeNumber';
import UseDeepCopy from './hooks/UseDeepCopy';
import Result from './components/Board/Result';

let gameRound = 0;
let gamePosition = 0;
const title = "Prime Number";

function App() {

  const [showSetting, setShowSetting] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mode, setMode] = useState("medium");
  const [play, setPlay] = useState(true);
  const [result, setResult] = useState(0);
  const [boardArray, setBoardArray] = useState([]);

  useEffect(() => {
    // generate the Prime Number
    generatePrimeNumber();
    // Set Board
    initBoard();
    // eslint-disable-next-line
  }, [mode]);

  function generatePrimeNumber() {
    // TODO: test if the primenumber generated is in the correct length (maybe create a function)
    switch (mode) {
      case 'easy':
        setResult(UsePrimeNumber(Math.random().toString().slice(2, 7)));
        break;
      case 'hard':
        setResult(UsePrimeNumber(Math.random().toString().slice(2, 9)));
        break;
      default:
        // 'medium'
        setResult(UsePrimeNumber(Math.random().toString().slice(2, 8)));
        break;
    }
  }

  function initBoard() {
    setBoardArray(UseDeepCopy(data)[mode]);
    gameRound = 0;
    gamePosition = 0;
  }

  // The game
  function game(keyVal) {
    ((parseInt(keyVal) >= 0) && (parseInt(keyVal) <= 9)) && addNum(keyVal);
    ((keyVal === "Backspace") && (gamePosition > 0)) && removeNum();
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

  // update the board with the new row
  function updateBoardRow(currentRow, gameRound) {
    setBoardArray(boardArray => boardArray.map((el, index) => {
      if (gameRound === index) {
        return currentRow;
      }
      return el
    }));
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

  function playAgain() {
    setPlay(true);
    initBoard();
    generatePrimeNumber();
  }

  // Get the values of keyboard keys
  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  });

  function handleKeyUp(e) {
    game(e.key);
  }

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <Header
          title={title}
          showSetting={showSetting}
          setShowSetting={setShowSetting}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </header>
      <main className="App-main">
        <div className="container">
          
          {!play && <Result result={result} playAgain={playAgain}/>}

          <Board
            boardArray={boardArray}
            setBoardArray={setBoardArray}
          />
          <Keyboard
            game={game}
          />
        </div>
      </main>
      <Menu
        showMenu={showMenu}
      />
      <Setting
        showSetting={showSetting}
        setTheme={setTheme}
        mode={mode}
        setMode={setMode}
      />
    </div>
  );
}

export default App;
