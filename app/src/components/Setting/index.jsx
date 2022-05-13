import './index.scss';
import PropTypes from 'prop-types';

function Setting({showSetting}) {
  return (
    <div className={showSetting ? "big-menu setting active" : "big-menu setting"}>
      <ul className="options">
        <li>
          <div className="label">Mode</div>
          <div className="option">
            <ul className="levels">
              <li className="">
                <button>Easy</button>
                <em>x5</em>
              </li>
              <li className="active">
                <button>Medium</button>
                <em>x6</em>
              </li>
              <li className="">
                <button>Hard</button>
                <em>x7</em>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="label">Dark Theme</div>
          <div className="option">
            <input type="checkbox" />
          </div>
        </li>
        <li>
          <div className="label">
            High Contrast
            <em>Mode for improved color vision</em>
          </div>
          <div className="option">
            <input type="checkbox" />
          </div>
        </li>
        <li>
          <div className="label">Feedback</div>
          <div className="option">
            <button className="email">E-mail</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

Setting.defaultProps = {
  showSettings: false
}

Setting.propTypes = {
  showSetting: PropTypes.bool,
}

export default Setting;