import { Component } from "react";
import Game from "./Game";

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }
  render() {
    const { games } = this.state;
    return (
      <section className="GameList">
        {games.map((singleGame) => (
          <Game key={singleGame.id} game={singleGame} />
        ))}
      </section>
    );
  }
}

export default GameList;
