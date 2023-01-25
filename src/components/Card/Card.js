export const Card = ({ obj }) => {
  return (
    <div
      className="card shadow bg-light col-12 col-md-3 col-lg-4 mx-auto p-0"
      style={{ width: "18rem" }}
    >
      <li className="card p-0">
        <img
          className="card-img-top"
          src={obj?.flags?.svg}
          width="100%"
          height="150"
          alt={obj?.name?.common}
        />
        <div className="card-body border border-top-1">
          <h3>{obj?.name?.common}</h3>
          <p>
            <strong>Population</strong>: {obj?.population}
          </p>
          <p>
            <strong>Region</strong>: {obj?.population}
          </p>
          <p>
            <strong>Capital</strong>: {obj?.population}
          </p>
        </div>
      </li>
    </div>
  );
};
