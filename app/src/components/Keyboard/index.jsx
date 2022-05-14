import './index.scss';
import Key from './Key';

function Keyboard() {
  return (
    <div className="keyboard">
      <Key val="7" />
      <Key val="8" />
      <Key val="9" />

      <Key val="4" />
      <Key val="5" />
      <Key val="6" />

      <Key val="1" />
      <Key val="2" />
      <Key val="3" />
      
      <Key val="return" />
      <Key val="0" />
      <Key val="remove" />
    </div>
  );
}

export default Keyboard;
