class SnakeHead{
  constructor(color, x, y){
    this.color = color
    this.angle = 0;
    this.length = 2;
    this.weight = 3;
    this.a = createVector(x, y)
    this.b = createVector(x, y)
  }

  draw(x, y){
    this.b.x = x
    this.b.y = y
    fill(this.color);
    ellipse(this.b.x, this.b.y, 10, 10);
  }
}

export default SnakeHead;
