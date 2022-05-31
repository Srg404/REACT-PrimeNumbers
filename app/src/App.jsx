import './App.scss';

import Header from './components/Header';
import Menu from './components/Menu';
import Setting from './components/Setting';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Game from './pages/Game';
import About from './pages/About';
import HowToPlay from './pages/HowToPlay';
import NotFound from './pages/NotFound';

const title = "Prime Number";
const languageStored = localStorage.getItem('language');
function App() {
  const { i18n } = useTranslation();
  const [showSetting, setShowSetting] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mode, setMode] = useState("medium");

  useEffect(() => {
    // set if language stored
    (languageStored) && i18n.changeLanguage(languageStored);
  }, [i18n]);

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <Header
          title={title}
          showSetting={showSetting}
          setShowSetting={setShowSetting}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          theme={theme}
        />
      </header>
      <BrowserRouter>
      
      <main className="App-main">
        <div className="container">
            <Routes>
              <Route path="/" element={<Game mode={mode}/>} />
              <Route path="about" element={<About />} />
              <Route path="how-to-play" element={<HowToPlay />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
      </main>
      <Menu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <Setting 
        showSetting={showSetting}
        setTheme={setTheme}
        theme={theme}
        mode={mode}
        setMode={setMode}
      />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
