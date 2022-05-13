import './index.scss';
import PropTypes from 'prop-types';

function Menu({showMenu}) {
  
  return (
    <div className={showMenu ? "big-menu menu active" : "big-menu menu"}>
      <nav className="menu">
        <ul>
          <li><a href="/">How to play</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </nav>
      <nav className="languages">
        <ul>
          <li><button className="active">FR</button></li>
          <li className="sepa"></li>
          <li><button>EN</button></li>
        </ul>
      </nav>
    </div>
  );
}

Menu.defaultProps = {
  showMenu: false
}

Menu.propTypes = {
  showMenu: PropTypes.bool,
}

export default Menu;

