import Players from "./entities/Players";
import Food from "./entities/Food";
import Arena from "./entities/Arena";
import ScoreBoard from "./entities/ScoreBoard";
import Timer from "./entities/Timer";
import Logo from "./entities/Logo";
import { TIMER_RESET, PLAYER_POSITIONS, MOUSE_POSITION } from "./events";

// TODO: Pintar segmentos de serpiente
// TODO: Hacer que las serpientes crezcan/parpadeen
// TOOD: Meter lógica ratón/websockets para multiplayer

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
    this._handleMousePlayer();
    this._handleFood();
    this._handlePlayerPositions();
  }

  update() {
    this.arena.draw();
    this.scoreBoard.draw();
    this.logo.draw();
    this.timer.draw();
    this.food.draw();
    this.players.draw();
  }

  _handleMousePlayer() {
    this.bus.on(MOUSE_POSITION, positionV => {
      console.log(positionV);
    });
  }

  _handleFood() {
    this.food = new Food();
    this.food.loadFoods(this.assets.foods);
    this.bus.on(TIMER_RESET, () => this.food.reposition());
  }

  _handlePlayerPositions() {
    this.bus.on(PLAYER_POSITIONS, positions => {
      this._updateSnakesPosition(positions);
    });
  }

  _updateSnakesPosition(trackedPlayers) {
    // TODO: Remove unactive Ids
    trackedPlayers.forEach(blob => {
      const isPlayerActive = this.players.find(blob.id);
      if (!isPlayerActive) {
        return this.players.add(blob);
      }
      return this.players.update(blob.id, blob);
    });
  }
}

export default Game;
