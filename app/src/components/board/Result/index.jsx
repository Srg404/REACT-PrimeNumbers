import './index.scss';
import PropTypes from 'prop-types';

function Result({result,playAgain}) {
  return (
    <div className="result">
      <div className="info">
        <center>{result}</center>
        <button onClick={() => {playAgain()}}>Play again</button>
      </div>
    </div>
  );
}

Result.propTypes = {
  result: PropTypes.number.isRequired,
}

export default Result;
