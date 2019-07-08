import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "typeface-roboto";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let's change the world!</p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;
