import "./Searchbar.css";
import SearchIcon from "../images/icon-search-black.svg";

const Searchbar = () => {
  return (
    <>
      <div className="searchbar">
        <div className="container">
          <form className="searchbar__form form">
            <div className="search">
              <img src={SearchIcon} width="18" height="18" alt="Search icon" />
              <input
                className="form__search-input"
                type="search"
                placeholder="Search for a country…"
              />
            </div>
            <select className="form__select">
              <option className="form__option">Filter by Region</option>
              <option className="form__option" value="Africa">
                Africa
              </option>
              <option className="form__option" value="America">
                America
              </option>
              <option className="form__option" value="Asia">
                Asia
              </option>
              <option className="form__option" value="Europe">
                Europe
              </option>
              <option className="form__option" value="Oceania">
                Oceania
              </option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
