import './index.scss';
import PropTypes from 'prop-types';
import Row from './Row';

function Board({boardArray,setBoardArray}) {
  return (
    <div className="board">
      {boardArray.map(
        (row, index) => (
          <Row key={index} row={row} />
        )
      )}
    </div>
  );
}

Board.propTypes = {
  boardArray: PropTypes.array.isRequired,
}

export default Board;
