import './App.scss';
import Board from './components/Board';
import Header from './components/Header';
import Keyboard from './components/Keyboard';
import Menu from './components/Menu';
import Setting from './components/Setting';
import { useEffect, useState } from 'react';
import data from './data/init.json';
import UsePrimeNumber from './hooks/UsePrimeNumber';

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
    // TODO: Improve this generation
    switch (mode) {
      case 'easy' :
        setResult(UsePrimeNumber(Math.random().toString().slice(2,7)).slice(-1)[0]);
        break;
      case 'hard' :
        setResult(UsePrimeNumber(Math.random().toString().slice(2,9)).slice(-1)[0]);
        break;
      default :
          // "medium"
          setResult(UsePrimeNumber(Math.random().toString().slice(2,8)).slice(-1)[0]);
          break;

    }
    // Set Board
    console.log("Reset");
    setBoardArray(boardArray => [...data[mode]]);
    gameRound = 0;
    gamePosition = 0;
  }, [mode]);

  // The game
  function game(keyVal) {
    console.log(data[mode]);
    ((parseInt(keyVal) >= 0) && (parseInt(keyVal) <= 9)) && addNum(keyVal);
    ((keyVal === "Backspace") && (gamePosition > 0)) && removeNum();
    (keyVal === "Enter") && checkRow();
  }

  function addNum(keyVal) {
    if (gamePosition < boardArray[0].length){
      const currentRow = boardArray[gameRound];
      currentRow[gamePosition][0] = "neutral";
      currentRow[gamePosition][1] = keyVal;
      gamePosition = (gamePosition === currentRow.length) ? gamePosition : gamePosition + 1 ;
      updateBoardRow(currentRow);
    }
  }

  function removeNum() {
    if (gamePosition > 0){
      const currentRow = boardArray[gameRound];
      gamePosition--;
      currentRow[gamePosition][0] = "empty";
      currentRow[gamePosition][1] = "0";
      updateBoardRow(currentRow);
    }
  }

  function updateBoardRow(currentRow) {
    setBoardArray(boardArray => boardArray.map((el,index) => {
      if (gameRound === index) {
        return currentRow;
      }
      return el
    }));
  }

  function checkRow() {
    console.log(`Check row`)
  }

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleKeyUp = (e) => {
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
        mode= {mode}
        setMode={setMode}
      />
    </div>
  );
}

export default App;
