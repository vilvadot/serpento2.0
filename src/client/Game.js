import Players from "./Players";
import Food from "./Food";
import { TIMER_RESET, PLAYER_POSITIONS } from "./events";

class Game {
  constructor(assets, bus) {
    this.assets = assets;
    this.bus = bus;
    this.players = new Players();
  }

  start() {
    this.food = new Food();
    this.food.loadFoods(this.assets.foods);
    this._handleFood()
    this._handlePlayerPositions();
  }

  update() {
    this.players.draw();
    this.food.draw();
  }

  _handleFood(){
    this.bus.on(TIMER_RESET, () => this.food.reposition());
  }
  
  _handlePlayerPositions() {
    this.bus.on(PLAYER_POSITIONS, positions => {
      this._updatePlayers(positions)
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
