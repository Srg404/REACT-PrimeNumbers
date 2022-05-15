import './App.scss';
import Board from './components/Board';
import Header from './components/Header';
import Keyboard from './components/Keyboard';
import Menu from './components/Menu';
import Setting from './components/Setting';
import { useEffect, useState } from 'react';
import data from './data/init.json';
import UsePrimeNumber from './hooks/UsePrimeNumber';

function App() {

  const title = "Prime Number";

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
    setBoardArray(data[mode]);

  }, [mode]);

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
          <div><em>result = <b>{result}</b></em></div>
          <Board 
            boardArray={boardArray} 
            setBoardArray={setBoardArray}
          />
          <Keyboard />
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
