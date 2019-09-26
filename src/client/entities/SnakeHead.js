class SnakeHead{
  constructor(color, x, y){
    // this.color = color
    this.color = '#F74F6A'
    this.size = 25
    this.a = createVector(x, y)
    this.b = createVector(x, y)
  }

  draw(x, y){
    this.a.x = x
    this.a.y = y
    this.b.x = x
    this.b.y = y
    fill(this.color);
    ellipse(this.b.x, this.b.y, this.size, this.size);
  }
}

export default SnakeHead;
