import Players from "./entities/Players";
import Food from "./entities/Food";
import Arena from "./entities/Arena";
import ScoreBoard from "./entities/ScoreBoard";
import Timer from "./entities/Timer";
import Logo from "./entities/Logo";
import {
  TIMER_RESET,
  PLAYER_POSITIONS,
  MOUSE_POSITION,
  FOOD_EATEN
} from "./events";

// TODO: Pintar segmentos de serpiente

class Game {
  constructor(assets, bus) {
    this.assets = assets;
    this.score = 0;
    this.bus = bus;
    this.food = new Food();
    this.players = new Players(this.food);
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

  _handleFood() {
    this.food.loadFoods(this.assets.foods);
    
    this.bus.on(TIMER_RESET, () => {
      this.food.regenerate();
      this.players.updateFood(this.food);
    });

    this.bus.on(FOOD_EATEN, () => {
      this.food.regenerate();
      this.timer.reset();
      this.score++;
      this.scoreBoard.update(this.score)
    });
  }

  _handleMousePlayer() {
    this.bus.on(MOUSE_POSITION, blob => {
      this._updateSnakesPosition("mouse", blob);
    });
  }

  _handlePlayerPositions() {
    // TODO: Remove unactive Ids
    this.bus.on(PLAYER_POSITIONS, positions => {
      positions.forEach(blob => {
        this._updateSnakesPosition(blob.id, blob);
      });
    });
  }

  _updateSnakesPosition(id, blob) {
    const isPlayerActive = this.players.find(id);
    if (!isPlayerActive) {
      return this.players.add(blob);
    }
    return this.players.update(id, blob);
  }
}

export default Game;
