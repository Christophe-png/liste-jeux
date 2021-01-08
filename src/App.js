import React from "react";
import Header from "./components/Header";
import GameList from "./components/GameList";
import sampleGames from "./data/sampleGames";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="Wild Games" />
      <GameList games={sampleGames} />
    </div>
  );
}

export default App;
