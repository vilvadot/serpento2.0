const BLINK_DURATION = 100;

class SnakeHead {
  constructor(color, x, y) {
    // this.color = color
    this.color = "#F74F6A";
    this.size = 25;
    this.a = createVector(x, y);
    this.b = createVector(x, y);
    this.isBlinking = false
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
