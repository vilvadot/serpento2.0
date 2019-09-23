import config from "./config";
import {random} from './utilities'

class Player {
  constructor(id, x, y) {
    this.id = id;
    this.color = this._getRandomColor()
    this.x = Number(x);
    this.y = Number(y);
  }

  update({ x, y }) {
    this.x = Number(x);
    this.y = Number(y);
  }

  draw() {
    const x = this.x * config.width * config.screenSize + config.widthOffset
    const y = this.y * config.height * config.screenSize + config.heightOffset
    fill(this.color);
    ellipse(
      x,
      y,
      10,
      10
    );
  }

  _getRandomColor(){
    const randomIndex = random(config.teams.red.length)
    return config.teams.red[randomIndex]
  }
}

class PlayerCollection {
  constructor() {
    this.players = [];
  }

  add(player) {
    const { id, x, y } = player;
    this.players.push(new Player(id, x, y));
  }

  find(candidate) {
    return this.players.find(player => player.id === candidate.id);
  }

  draw() {
    this.players.forEach(player => player.draw());
  }
}

export default PlayerCollection;
