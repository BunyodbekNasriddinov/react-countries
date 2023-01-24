import "./Country.css";
import { data } from "../data";

const Card = ({ name, img, region, capital, population }) => {
  return (
    <li className="country__item">
      <img src={img} width="264" height="160" alt={name} />
      <h3 className="country__title">{name}</h3>
      <ul className="country__sublist">
        <li className="country__subitem">
          <span>Population:</span> {population}
        </li>
        <li className="country__subitem">
          <span>Region:</span>
          {region}
        </li>
        <li className="country__subitem">
          <span>Capital:</span> {capital}
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
              {data.map((country) => (
                <Card
                  key={country.id}
                  img={country.img}
                  name={country.name}
                  capital={country.capital}
                  region={country.region}
                  population={country.population}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Country;
