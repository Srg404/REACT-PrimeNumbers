import './index.scss';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from "react-router-dom";

function Menu({showMenu,setShowMenu}) {
  const { t, i18n } = useTranslation();
  const changeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  }
  const {pathname} = useLocation();
  useEffect(() => {
    setShowMenu(false);
    // eslint-disable-next-line 
  }, [ pathname ]);


  return (
    <div className={showMenu ? "big-menu menu active" : "big-menu menu"}>
      <nav className="menu">
        <ul>
          <li>
            <NavLink 
            to="/" 
            activeclassname="active"
            >{t('the game')}</NavLink></li>
          <li>
            <NavLink 
            to="/how-to-play" 
            activeclassname="active"
            >{t('How to play')}</NavLink></li>
          <li>
            <NavLink 
            to="/about" 
            activeclassname="active"
            >{t('About')}</NavLink></li>
        </ul>
      </nav>
      <nav className="languages">
        <ul>
          <li><button className={(i18n.language === "fr") ? "active" : ""} onClick={() => changeLng('fr')}>FR</button></li>
          <li className="sepa"></li>
          <li><button className={(i18n.language === "en") ? "active" : ""} onClick={() => changeLng('en')}>EN</button></li>
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
  setShowMenu: PropTypes.func,
}

export default Menu;