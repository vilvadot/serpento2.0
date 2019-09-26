import {randomHexColor} from '../utilities'

class SnakeSegment{
  constructor(color, parent){
    // this.color = color
    this.color = randomHexColor()
    this.parent = parent
    this.angle = 0;
    this.length = 20;
    this.weight = 10;
    this.a = this.parent.b.copy();
    this.b = this.computeB();
  }

  computeB() {
    const dx = this.length * cos(this.angle);
    const dy = this.length * sin(this.angle);
    return createVector(this.a.x + dx, this.a.y + dy);
  }

  _update(){
    this.b = this.computeB();
    this._follow(this.parent.b.x, this.parent.b.y)
  }

  _follow(x, y){
    const target = createVector(x, y);
    const direction = target.copy().sub(this.a);
    this.angle = direction.heading();
    direction.setMag(this.length);
    direction.mult(-1);
    this.a = target.add(direction);
  }

  // grow(){
  //   this.length = this.length*CONFIG.snake.growthRate;
  //   if(this.parent){
  //     this.parent.grow();
  //     this.parent.update();
  //   }
  // }

  draw(){
    this._update()
    fill(this.color);
    stroke(this.color);
    strokeWeight(this.weight);
    line(this.a.x,this.a.y, this.b.x,this.b.y);
  }
}

export default SnakeSegment;
