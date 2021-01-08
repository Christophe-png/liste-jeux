import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="Wild Games" />
      <Game />
    </div>
  );
}

export default App;
