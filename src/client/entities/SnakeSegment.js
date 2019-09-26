import config from "../config";

const BLINK_DURATION = 100;

class SnakeSegment {
  constructor(parent) {
    this.parent = parent;
    this.angle = 0;
    this.length = this.parent.length * 0.9 || config.snake.segmentLength;
    this.weight = this.parent.weight * 0.9 || config.snake.weight;
    this.isBlinking = false;
    this.a = this.parent.b.copy();
    this.b = this.computeB();
    this.color = this.parent.color;
  }

  computeB() {
    const dx = this.length * cos(this.angle);
    const dy = this.length * sin(this.angle);
    return createVector(this.a.x + dx, this.a.y + dy);
  }

  _update() {
    this._follow(this.parent.a.x, this.parent.a.y);
    this.b = this.computeB();
  }

  _follow(x, y) {
    const target = createVector(x, y);
    const direction = target.copy().sub(this.a);
    this.angle = direction.heading();
    direction.setMag(this.length);
    direction.mult(-1);
    this.a = target.add(direction);
  }

  grow() {
    this.length = this.length * config.snake.growthRate;
  }

  blink() {
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

  _debug() {
    const fontSize = config.screen.size * 6;
    const x = Math.floor(this.a.x);
    const y = Math.floor(this.a.y);
    noStroke();
    fill(255);
    textSize(fontSize);
    text(`A: ${x},${y}, B: ${x},${y}`, x + 20, y);
  }

  draw() {
    if (config.debug) this._debug();
    this._update();
    fill(this.color);
    stroke(this.color);
    strokeWeight(this.weight);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}

export default SnakeSegment;
