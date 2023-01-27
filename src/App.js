import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { SingleCountry } from "./pages/SingleCountry/SingleCountry";
import { Error } from "./pages/Error/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<SingleCountry />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
