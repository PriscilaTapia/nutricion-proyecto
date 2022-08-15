import React from "react";
import "./App.css";
import inicio from "./assets/cuentos/INICIO.png";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img class="img-fluid" src={inicio} alt="Cuento 1" />
      </header>
      <div className="App-Card">
        <Cards />
      </div>
      <footer className="App-footer">
        <p> © 2022 – Priscila Tapia. Proyecto de titulo II</p>
      </footer>
    </div>
  );
}

export default App;
