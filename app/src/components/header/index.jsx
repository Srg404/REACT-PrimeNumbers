import './index.scss';
import settingIcon from '../../assets/images/setting.svg';
import settingIconBlack from '../../assets/images/setting-black.svg';
import menuIcon from '../../assets/images/menu.svg';
import menuIconBlack from '../../assets/images/menu-black.svg';
import PropTypes from 'prop-types';

function Header({showSetting,showMenu,setShowMenu,setShowSetting,title,theme}) {

  return (
    <div className="header">
      <button
        className={showSetting ? "bt-setting active" : "bt-setting"}
        onClick={() => {
          setShowSetting(!showSetting);
          setShowMenu(false)
        }}
      >
        <img src={(theme !== "light") ? settingIcon : settingIconBlack} className="icon-menu" alt="setting" />
        <span>Setting</span>
      </button>
      <h1>{title}<em>Beta</em></h1>
      <button
        className={showMenu ? "bt-menu active" : "bt-menu"}
        onClick={() => {
          setShowMenu(!showMenu)
          setShowSetting(false);
        }}
      >
        <span>Menu</span>
        <img src={(theme !== "light") ? menuIcon : menuIconBlack} className="icon-menu" alt="menu" />
      </button>
    </div>
  );
}

Header.propTypes = {
  showSetting: PropTypes.bool,
  showMenu: PropTypes.bool,
  setShowSetting: PropTypes.func,
  setShowMenu: PropTypes.func,
}

export default Header;
