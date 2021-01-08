import Game from "./Game";

const GameList = (props) => (
  <section className="GameList">
    {props.games.map((singleGame) => (
      <Game
        key={singleGame.id}
        name={singleGame.name}
        background_image={singleGame.background_image}
        rating={singleGame.rating}
      />
    ))}
  </section>
);

export default GameList;
