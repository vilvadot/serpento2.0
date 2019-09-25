import config from "./config";
import { random } from "./utilities";

const translateXToCanvas = x => {
  return Math.floor(x * config.width * config.screenSize + config.widthOffset);
};

const translateYToCanvas = y => {
  return Math.floor(y * config.height * config.screenSize + config.heightOffset);
};

class Snake {
  constructor(id, x, y) {
    this.id = id;
    this.color = this._getRandomColor();
    this.x = translateXToCanvas(x);
    this.y = translateYToCanvas(y);
  }

  update({ x, y }) {
    this.x = translateXToCanvas(x);
    this.y = translateYToCanvas(y);
  }

  draw() {
    fill(this.color);
    ellipse(this.x, this.y, 10, 10);
    this._debug();
  }

  _debug() {
    const fontSize = config.screenSize * 6;
    noStroke();
    fill(255);
    textSize(fontSize);
    text(`x: ${this.x}, y: ${this.y}`, this.x, this.y);
  }

  _getRandomColor() {
    const randomIndex = random(config.teams.red.length);
    return config.teams.red[randomIndex];
  }
}

export default Snake;
