import './index.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function Menu({showMenu}) {
  const { t, i18n } = useTranslation();
  const changeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  }

  return (
    <div className={showMenu ? "big-menu menu active" : "big-menu menu"}>
      <nav className="menu">
        <ul>
          <li><a href="/">{t('How to play')}</a></li>
          <li><a href="/">{t('About')}</a></li>
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
  showMenu: PropTypes.bool
}

export default Menu;