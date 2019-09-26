import SnakeSegment from "./SnakeSegment";
import SnakeHead from "./SnakeHead";
import config from "../config";
import { random, translateX, translateY } from "../utilities";

const BLINK_DURATION = 100;

class Snake {
  constructor(id, x, y) {
    this.id = id;
    this.points = 0;
    this.color = this._getRandomColor();
    this.x = translateX(x);
    this.y = translateY(y);
    this.isBlinking = false;
    this.segments = this._build(this.x, this.y)
  }

  _build(x, y){
    const head = new SnakeHead(this.color, x, y)
    const segment1 = new SnakeSegment(this.color, head)
    const segment2 = new SnakeSegment(this.color, segment1)
    const snake = [head, segment1, segment2]
    return snake
  }

  eat() {
    this.points++
    this._blink();
  }

  update({ x, y }) {
    this.x = translateX(x);
    this.y = translateY(y);
  }

  draw() {
    this.segments.forEach(segment => segment.draw(this.x, this.y));
    if(config.debug) this._debug();
  }

  _debug() {
    const fontSize = config.screenSize * 6;
    noStroke();
    fill(255);
    textSize(fontSize);
    text(`id: ${this.id}, x: ${this.x}, y: ${this.y}`, this.x + 20, this.y);
  }

  _blink() {
    if (!this.isBlinking) {
      const oldColor = this.color;
      this.color = "#fff";
      this.isBlinking = true;
      setTimeout(() => {
        this.color = oldColor;
        this.isBlinking = false;
      }, BLINK_DURATION);
    }
  }

  _getRandomColor() {
    const randomIndex = random(config.teams.red.length);
    return config.teams.red[randomIndex];
  }
}

export default Snake;