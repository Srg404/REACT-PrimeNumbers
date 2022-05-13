import './App.scss';
import Board from './components/Board';
import Header from './components/Header';
import Keyboard from './components/Keyboard';
import Menu from './components/Menu';
import Setting from './components/Setting';
import { useState } from 'react';

function App() {

  const [showSetting, setShowSetting] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const title = "Prime Number";

  return (
    <div className="App">
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
          <Board />
          <Keyboard />
        </div>
      </main>
      <Menu showMenu={showMenu}/>
      <Setting showSetting={showSetting}/>
    </div>
  );
}

export default App;
