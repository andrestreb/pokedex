import React from "react";
import "./App.css";
import "typeface-roboto";
import Button from "@material-ui/core/Button";
import Navbar from "./components/navbar";
import Pokemoncard from "./components/pokemoncard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Pokemoncard />

        <Button variant="contained" color="primary">
          Let's change the world!
        </Button>
      </header>
    </div>
  );
}

export default App;
