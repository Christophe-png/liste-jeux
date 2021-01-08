import React from "react";
import Header from "./components/Header";
import GameList from "./components/GameList";
//import "./icomoon/style.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="Wild Games" />
      <GameList />
    </div>
  );
}

export default App;
