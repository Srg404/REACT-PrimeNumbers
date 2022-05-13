import './index.scss';
import Row from './Row';

function Board() {
  return (
    <div className="board">
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
}

export default Board;
