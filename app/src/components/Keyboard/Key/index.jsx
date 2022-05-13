import './index.scss';
import returnIcon from '../../../assets/images/return.svg';
import removeIcon from '../../../assets/images/remove.svg';
import PropTypes from 'prop-types';

function Key({val}) {

  const displayVal = (val) => {
    if (val === "return") {
      return <img src={returnIcon} className="icon-menu" alt="setting" />
    }
    if (val === "remove") {
      return <img src={removeIcon} className="icon-menu" alt="setting" />
    }
    return val
  }

  return (
    <button className={`key key-${val}`}>
      <span>{displayVal(val)}</span>
    </button>
  );
}

Key.propTypes = {
  val: PropTypes.string,
}

export default Key;
