import React from "react";
import "./Game.css";

function Game(props) {
  return (
    <article className="Game">
      <h3>{props.name}</h3>
      <img src={props.background_image} alt="Game Title" />
      <p>Rating: {props.rating}</p>
    </article>
  );
}

export default Game;
