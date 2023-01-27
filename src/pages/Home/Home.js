import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { List } from "../../components/List";
import { Loading } from "../../components/Loading";

export const Home = () => {
  let inputValue = useRef();
  let selectValue = useRef();

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

    getCountries("all");
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getCountries(`name/${inputValue.current.value}`);
  };

  const handleSelect = () => {
    if (selectValue.current.value === "All") getCountries("all");
    else if (selectValue.current.value)
      getCountries(`region/${selectValue.current.value}`);
  };

  return (
    <>
      <main>
        <section className="postion-relative">
          <div className="container">
            <form className="d-flex my-5" onSubmit={(evt) => handleSubmit(evt)}>
              <div className="input-group w-50 shadow">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search by name"
                  ref={inputValue}
                />
                <button className="btn btn-primary">SEARCH</button>
              </div>
              <select
                className="form-select ms-auto w-25 shadow"
                onChange={handleSelect}
                ref={selectValue}
              >
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </form>
            <List countries={countries} />
            {countries.isLoading ? <Loading /> : ""}
          </div>
        </section>
      </main>
    </>
  );
};
