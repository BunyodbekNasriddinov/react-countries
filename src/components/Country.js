import "./Country.css";
import Flag from "../images/usa.png";

const Card = () => {
  return (
    <li className="country__item">
      <img src={Flag} width="264" height="160" alt="Country image" />
      <h3 className="country__title">United States of America</h3>
      <ul className="country__sublist">
        <li className="country__subitem">
          <span>Population:</span> 323,947,000
        </li>
        <li className="country__subitem">
          <span>Region:</span>Americas
        </li>
        <li className="country__subitem">
          <span>Capital:</span> Washington, D.C.
        </li>
      </ul>
    </li>
  );
};

const Country = () => {
  return (
    <>
      <section className="country">
        <div className="container">
          <div className="country__inner">
            <ul className="country__list">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Country;
