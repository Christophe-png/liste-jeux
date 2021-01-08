import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="Wild Games" />
      <Game
        name="Grand Theft Auto V"
        background_image="https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg"
        rating={4.47}
      />
    </div>
  );
}

export default App;
