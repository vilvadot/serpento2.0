import SnakeSegment from "./SnakeSegment";
import SnakeHead from "./SnakeHead";
import config from "../config";
import { randomHexColor, translateX, translateY } from "../utilities";

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
    const snake = [head]
    for(let i = 1; i < config.snake.segments; i++){
      const previousSegment = snake[i - 1]
      snake.push(new SnakeSegment(previousSegment))
    }
    return snake
  }

  eat() {
    this.points++
    this._blink();
    this._grow();
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
    const fontSize = config.screen.size * 6;
    noStroke();
    fill(255);
    textSize(fontSize);
    text(`id: ${this.id}, x: ${this.x}, y: ${this.y}`, this.x + 20, this.y);
  }

  _blink() {
    this.segments.forEach(segment => segment.blink());
  }

  _grow() {
    this.segments.forEach(segment => segment.grow && segment.grow());
  }


  _getRandomColor() {
    return randomHexColor()
  }
}

export default Snake;