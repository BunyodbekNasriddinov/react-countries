import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export const SingleCountry = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [countries, setCountries] = useState({
    isLoading: false,
    data: [],
    isError: "",
  });

  const getCountries = (url) => {
    axios
      .get(`https://restcountries.com/v3.1//${url}`)
      .then((data) => {
        if (data.status === 200) {
          setCountries({
            isLoading: false,
            data: data.data,
            isError: "",
          });
        }
      })
      .catch((err) => {
        if (err.message) {
          setCountries({
            isLoading: false,
            data: [],
            isError: err.message,
          });
        }
      });
  };

  useEffect(() => {
    setCountries({
      isLoading: true,
      data: [],
      isError: "",
    });

    getCountries(`/name/${name}`);
  }, [name]);

  const country = countries.data[0];

  return (
    <>
      <div className="container">
        <button className="btn btn-danger mt-5" onClick={() => navigate(-1)}>
          Back
        </button>
        <div className="row my-5">
          <img
            className="col-12 col-md-6 col-lg-6 p-0 rounded"
            src={country?.flags?.svg}
            width="560"
            height="400"
            alt={country?.name?.common}
          />
          <div className="col-12 col-md-6 col-lg-6">
            <div className="ms-5">
              <h2 className="h2 my-3 mt-5">{country?.name?.common}</h2>
              <div className="d-flex">
                <ul className="list-unstyled">
                  <li>
                    <strong>Native name</strong>: {country?.name?.common}
                  </li>
                  <li>
                    <strong>Population</strong>: {country?.population}
                  </li>
                  <li>
                    <strong>Region</strong>: {country?.region}
                  </li>
                  <li>
                    <strong>Sub Region</strong>: {country?.subregion}
                  </li>
                  <li>
                    <strong>Capital</strong>: {country?.capital}
                  </li>
                </ul>
                <ul className="list-unstyled ms-5">
                  <li>
                    <strong>Top level domain</strong>: {country?.name?.common}
                  </li>
                  <li>
                    <strong>Currencies</strong>:
                  </li>
                  <li>
                    <strong>Languages</strong>: {country?.languages?.eng},{" "}
                    {country?.name?.common}
                  </li>
                </ul>
              </div>
              <p className="mt-5 p-0">
                <strong>Border Countries: </strong>{" "}
                {country?.borders?.map((border, i) => (
                  <span
                    className="btn btn-white me-2 shadow"
                    key={i}
                  >{`${border}, `}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
