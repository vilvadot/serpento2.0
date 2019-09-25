import mockData from "./mock_tracking.json";
import Replayer from "../replayer/Replayer";
import Players from "./Players";
import Food from "./Food";
import { TIMER_RESET } from "./events";

const FREQUENCY = 50;

class Game {
  constructor(assets, bus) {
    this.assets = assets;
    this.bus = bus;
    this.players = new Players();
  }

  start() {
    this.food = new Food()
    this.food.loadFoods(this.assets.foods);
    this.bus.on(TIMER_RESET, () => this.food.reposition());
    this._handlePlayerPositions();
  }

  update() {
    this.players.draw();
    this.food.draw();
  }

  _handlePlayerPositions() {
    const fakeServer = new Replayer(mockData, FREQUENCY);

    fakeServer.replay(message => {
      this._updatePlayers(message.blobs);
    });
  }

  _updatePlayers(trackedPlayers) {
    // TODO: Remove unactive Ids
    trackedPlayers.forEach(blob => {
      const activePlayer = this.players.find(blob);
      if (!activePlayer) {
        return this.players.add(blob);
      }
      return activePlayer.update(blob);
    });
  }
}

export default Game;
