import './index.scss';
import returnIcon from '../../assets/images/return.svg';
import removeIcon from '../../assets/images/remove.svg';

function Keyboard() {
  return (
    <div className="keyboard">
      [Keyboard]
      <img src={returnIcon} className="icon-menu" alt="setting" />
      <img src={removeIcon} className="icon-menu" alt="setting" />
    </div>
  );
}

export default Keyboard;
