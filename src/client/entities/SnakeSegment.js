class SnakeSegment{
  constructor(color){
    this.color = color
  }
  // constructor(id, team, index, parent, length, weight, color, x, y){
  //   this.id = id;
  //   this.index = index || 1;
  //   this.team = team;
  //   this.parent = parent;
  //   this.angle = 0;
  //   this.color = color;
  //   this.selfAngle = this.angle;
  //   this.length = length;
  //   this.weight = weight;
  //   this.points = 0;
  //   this.x = x;
  //   this.y = y;
  //   if(this.parent){
  //     this.a = this.parent.b.copy();
  //     this.calcB();
  //   }else{
  //     // Tail
  //     this.a = createVector();
  //     this.a.set(this.x,this.y);
  //     this.b = createVector();
  //   }
  // }

  // calcB() {
  //   const dx = this.length * cos(this.angle);
  //   const dy = this.length * sin(this.angle);
  //   this.b = createVector(this.a.x + dx, this.a.y + dy);
  // }

  // update(){
  //   this.calcB();
  // }

  // follow(targetX, targetY){
  //   const target = createVector(targetX, targetY);
  //   const direction = target.copy().sub(this.a);
  //   this.angle = direction.heading();
  //   direction.setMag(this.length);
  //   direction.mult(-1);
  //   this.a = target.add(direction);
  // }

  // drawInfo(){
  //   const fontSize = CONFIG.canvasMultiplier * 6;
  //   noStroke();
  //   fill('150,150,150');
  //   textSize(fontSize);
  //   text(`id:${this.id.split('-')[0]}`, this.a.x + fontSize, this.a.y);
  //   text(`x:${this.a.x.toFixed(0)}, y:${this.a.y.toFixed(0)}`, this.a.x + fontSize , this.a.y + fontSize);
  //   text(`*${this.points}`, this.a.x + fontSize , this.a.y + fontSize * 2);
  // }

  // grow(){
  //   this.length = this.length*CONFIG.snake.growthRate;
  //   if(this.parent){
  //     this.parent.grow();
  //     this.parent.update();
  //   }
  // }

  // blink(){
  //   if(this.parent){
  //     this.parent.blink();
  //   }
  //   const prevColor = this.color;
  //   this.color = '#fff';
  //   setTimeout(()=>{
  //     this.color = prevColor;
  //   },CONFIG.snake.blinkTime);
  // }

  // checkIfEaten(game, food){
  //   const Xcondition = (food.x - 30 <= this.a.x) && (food.x + 30 >= this.a.x);
  //   const Ycondition = (food.y - 30 <= this.a.y) && (food.y + 30 >= this.a.y);

  //   if(this.id.includes('head')){
  //     // If colliding with food
  //     if(Xcondition && Ycondition){
  //       // tell food its eaten
  //       food.eaten();
  //       // grow self
  //       this.blink();
  //       this.grow();
  //       // this.parent.update();
  //       // and update marker
  //       game.points[this.team]++;
  //       this.points++;
  //     }
  //   }
  // }

  draw(x, y, color){
    fill(color);
    ellipse(x, y, 10, 10);
    // stroke(this.color);
    // if(this.id.includes('head') && CONFIG.debugText){
    //   this.drawInfo();
    // }
    // strokeWeight(this.weight);
    // line(this.a.x,this.a.y,this.b.x,this.b.y);
  }
}

export default SnakeSegment;
