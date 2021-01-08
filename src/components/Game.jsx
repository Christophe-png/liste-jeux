import React from "react";
import "./Game.css";

const Game = ({ game }) => (
  <article className="Game">
    <h3>{game.name}</h3>
    <img src={game.background_image} alt="Game Title" />
    <p>Rating: {game.rating}</p>
    <button type="button" className="Game-toggleFavorite">
      ❤
    </button>
  </article>
);

export default Game;
