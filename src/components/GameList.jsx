import { Component } from "react";
import axios from "axios";
import Game from "./Game";
import "./GameList.css";

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }

  fetchGames = () => {
    axios
      .get("https://apis.wilders.dev/wild-games/games/")
      .then((response) => this.setState({ games: response.data }));
  };

  componentDidMount() {
    this.fetchGames();
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
