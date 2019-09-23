const getRandomNum = (min, max) =>  {
  return Math.floor(Math.random() * (max - min) + min);
};

class Food {
  constructor(p5, game, size, multiplier = 1, debug = false) {
    this.p5 = p5;
    this.multiplier = multiplier;
    this.debug = debug;
    this.game = game;
    this.x = getRandomNum(0, 192 * this.multiplier);
    this.y = getRandomNum(32 * this.multiplier, 157 * this.multiplier);
    this.size = size || 20;
  }

  drawInfo(){
    this.p5.noStroke();
    this.p5.fill('#EE0D61');
    this.p5.textSize(8);
    this.p5.text(`(x:${this.x.toFixed(0)}, y:${this.y.toFixed(0)})`, this.x + 20 , this.y + 20);
  }

  reposition(){
    this.x = getRandomNum(0, 192 * this.multiplier),
    this.y = getRandomNum(32 * this.multiplier, 157 * this.multiplier);
  }

  eaten(){
    this.game.updateFood();
    this.reposition();
  }

  draw(image) {
    if(!image){
      this.p5.fill('#EE0D61');
      this.p5.ellipse(this.x, this.y, this.size, this.size);
    }else{
      this.p5.noStroke();
      this.p5.image(image, this.x, this.y, this.size, this.size );
    }
      this.drawInfo();
  }
}

export default Food