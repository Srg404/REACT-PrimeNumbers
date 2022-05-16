import './index.scss';
import Key from './Key';
import PropTypes from 'prop-types';

function Keyboard({game}) {

  return (
    <div className="keyboard">
      <Key val="7" game={game}/>
      <Key val="8" game={game} />
      <Key val="9" game={game} />

      <Key val="4" game={game} />
      <Key val="5" game={game} />
      <Key val="6" game={game} />

      <Key val="1" game={game} />
      <Key val="2" game={game} />
      <Key val="3" game={game} />
      
      <Key val="Enter" game={game} />
      <Key val="0" game={game} />
      <Key val="Backspace" game={game} />
    </div>
  );
}

Keyboard.propTypes = {
  game: PropTypes.func,
}

export default Keyboard;
