import "./Header.css";
import ModeIcon from "../images/mode.svg";
const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__inner">
            <h2 className="sit-header-title">Where in the world?</h2>
            <button className="mode-btn">
              <img src={ModeIcon} width="18" height="18" alt="Mode icon" /> Dark
              Mode
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
