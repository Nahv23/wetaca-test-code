import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [dataFlight, setDataFlight] = useState(null);
  const query = `query dishes {
    dishes {
      name
      price
      image
    }
  }`
  const url = 'http://localhost:4000';
  const opt = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  };

  useEffect (() => {


    fetch(url, opt)
      .then(res => res.json())
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, [setDataFlight]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
