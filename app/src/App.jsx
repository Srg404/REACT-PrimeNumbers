import './App.scss';
import Board from './components/board';
import Header from './components/header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <main>
        <Board></Board>
      </main>
    </div>
  );
}

export default App;
