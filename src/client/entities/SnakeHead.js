import config from '../config'

const BLINK_DURATION = 100;

class SnakeHead {
  constructor(color, x, y) {
    this.size = config.snake.weight;
    this.a = createVector(x, y);
    this.b = createVector(x, y);
    this.isBlinking = false
    this.color = color;
  }

  blink(){
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

  _updatePosition(x, y) {
    this.a.x = x;
    this.a.y = y;
    this.b.x = x;
    this.b.y = y;
  }

  draw(x, y) {
    this._updatePosition(x, y);
    fill(this.color);
    ellipse(this.b.x, this.b.y, this.size, this.size);
  }
}

export default SnakeHead;
