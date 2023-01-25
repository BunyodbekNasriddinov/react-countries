import ModeIcon from "../../assets/images/mode.svg";
export const Header = () => {
  return (
    <header className="py-3 shadow">
      <div className="container">
        <div className="d-flex align-items-center">
          <h2 className="h2">Where in the world?</h2>
          <button className="btn p-0 ms-auto">
            <img
              className="me-3 my-auto"
              src={ModeIcon}
              width="15"
              height="15"
              alt="Mode icon"
            />
            Mode
          </button>
        </div>
      </div>
    </header>
  );
};
