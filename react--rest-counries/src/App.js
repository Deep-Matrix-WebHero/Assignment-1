import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";

function App() {
  return <div className="App">{<Countries></Countries>}</div>;
}

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2> travelling in around the world </h2>
      <h4>count countries: {countries.length}</h4>
      {countries.map((country) => (
        <Countries name={country.name} capital={country.capital}></Countries>
      ))}
    </div>
  );
}
function Country(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Capital: {props.capital}</p>
    </div>
  );
}

export default App;
