import { Component } from "react";
import axios from "axios";
import Game from "./Game";
import "./GameList.css";

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      filterBest: false,
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

  toggleFilterBest = () => {
    const { filterBest } = this.state;
    this.setState({
      filterBest: !filterBest,
    });
  };

  render() {
    const { games, filterBest } = this.state;
    let filteredGames = games;
    if (filterBest) {
      filteredGames = filteredGames.filter(
        (singleGame) => singleGame.rating >= 4.5
      );
    }

    return (
      <section className="GameList">
        <button type="button" onClick={this.toggleFilterBest}>
          {filterBest ? "All games" : "Best games"}
        </button>
        <div className="GameList-list">
          {games.map((singleGame) => (
            <Game key={singleGame.id} game={singleGame} />
          ))}
        </div>
      </section>
    );
  }
}

export default GameList;
