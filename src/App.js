import { useState, useEffect, useRef } from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";
import LoadingAnimation from "./assets/images/loading.gif";

function App() {
  let inputValue = useRef();
  let selectValue = useRef();

  const [counties, setCountries] = useState({
    isLoading: false,
    data: [],
    isError: "",
  });

  const getCountries = async (url) => {
    const response = await fetch(`https://restcountries.com/v3.1/${url}`);
    const data = await response.json();
    const err = await data;

    if (data) {
      setCountries({
        isLoading: false,
        data: data,
        isError: "",
      });
    } else if (err) {
      setCountries({
        isLoading: false,
        data: [],
        isError: err.message,
      });
    }
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

  const handleSelect = (evt) => {
    console.log(evt, "select");
    console.log(selectValue);
    if (selectValue.current.value === "All") getCountries("all");
    else if (selectValue.current.value)
      getCountries(`region/${selectValue.current.value}`);
  };

  return (
    <>
      <Header />
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
                onChange={(evt) => handleSelect(evt)}
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
            {counties.isError ? <h2>{counties.isError}</h2> : ""}
            {counties.isLoading ? (
              <img
                className="loading m-auto"
                src={LoadingAnimation}
                width="200"
                height="200"
                alt="Loading animation"
              />
            ) : (
              ""
            )}
            {counties.data.length ? (
              <ul className="row my-5 gy-4 list-unstyled">
                {counties.data.map((item) => (
                  <Card key={item.name.common} obj={item} />
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
