import React from "react";
import "./App.css";
import "typeface-roboto";
import Navbar from "./components/navbar";
import Pokemonarea from "./components/pokemonarea";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Pokemonarea />
      </header>
    </div>
  );
}

export default App;
