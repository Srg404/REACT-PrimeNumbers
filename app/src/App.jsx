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

let gameRound = 0;
let gamePosition = 0;
const title = "Prime Number";

function App() {

  const [showSetting, setShowSetting] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mode, setMode] = useState("medium");
  const [result, setResult] = useState(0);
  const [boardArray, setBoardArray] = useState([]);

  useEffect(() => {
    // generate the Prime Number
    // TODO: Improve this code
    switch (mode) {
      case 'easy':
        setResult(UsePrimeNumber(Math.random().toString().slice(2, 7)).slice(-1)[0]);
        break;
      case 'hard':
        setResult(UsePrimeNumber(Math.random().toString().slice(2, 9)).slice(-1)[0]);
        break;
      default:
        // 'medium'
        setResult(UsePrimeNumber(Math.random().toString().slice(2, 8)).slice(-1)[0]);
        break;
    }
    // Set Board
    setBoardArray(UseDeepCopy(data)[mode]);
    gameRound = 0;
    gamePosition = 0;
  }, [mode]);

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

  // When the user push on enter delete
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
    console.log(gameRound);
    if ((gameRound < boardArray.length) && (gamePosition === boardArray[0].length)) {
      console.log(`Check row`);

      const currentRow = boardArray[gameRound];
      const resultArray = result.toString().split("");

      // Possible Value : empty neutral exist ok 

      const newRow = currentRow.map((el, index) => {

        if (el[1] === resultArray[index]) {
          return ["ok", el[1]];
        } else if (resultArray.filter((e) => el[1] === e).length) {
          return ["exist", el[1]];
        } else {
          return ["neutral", el[1]];
        }
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

      // init Board
      setBoardArray(UseDeepCopy(data)[mode]);
      gameRound = 0;
      gamePosition = 0;
      // TODO: generate a new number result
    }
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
          <center><em>result = <b>{result}</b></em></center>
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
