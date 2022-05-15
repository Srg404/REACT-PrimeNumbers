import './index.scss';
import PropTypes from 'prop-types';

function Setting({showSetting, setTheme, mode, setMode}) {

  const handleChangeTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className={showSetting ? "big-menu setting active" : "big-menu setting"}>
      <ul className="options">
        <li>
          <div className="label">Mode</div>
          <div className="option">
            <ul className="levels">
              <li className={(mode === "easy") ? "active" : ""}>
                <button onClick={() => {setMode("easy")}}>Easy</button>
                <em>x5</em>
              </li>
              <li className={(mode === "medium") ? "active" : ""}>
                <button onClick={() => {setMode("medium")}}>Medium</button>
                <em>x6</em>
              </li>
              <li className={(mode === "hard") ? "active" : ""}>
                <button  onClick={() => {setMode("hard")}}>Hard</button>
                <em>x7</em>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="label">Dark Theme</div>
          <div className="option">
            <input 
              type="checkbox" 
              onChange={handleChangeTheme}
            />
          </div>
        </li>
        {/* 
        <li>
          <div className="label">
            High Contrast
            <em>Mode for improved color vision</em>
          </div>
          <div className="option">
            <input type="checkbox" />
          </div>
        </li>
        */}
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