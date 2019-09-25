import Players from "./Players";
import Food from "./Food";
import Arena from "./Arena";
import ScoreBoard from "./ScoreBoard";
import Timer from "./Timer";
import { TIMER_RESET, PLAYER_POSITIONS } from "./events";
import Logo from "./Logo";

class Game {
  constructor(assets, bus) {
    this.assets = assets;
    this.bus = bus;
    this.players = new Players();
    this.arena = new Arena();
    this.scoreBoard = new ScoreBoard();
    this.logo = new Logo(this.assets.logo);
    this.timer = new Timer(this.bus);
  }

  start() {
    this.food = new Food();
    this.food.loadFoods(this.assets.foods);
    this._handleFood()
    this._handlePlayerPositions();
  }

  update() {
    this.arena.draw();
    this.scoreBoard.draw();
    this.logo.draw()
    this.timer.draw()
    this.food.draw();
    this.players.draw();
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
