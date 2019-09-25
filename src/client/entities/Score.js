import config from '../config'

const FONT_SIZE = 17

class Score {
  constructor(text = "EQUIPO", color, x, y) {
    this.text = text;
    this.multiplier = config.screenSize;
    this.points = 0;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  draw() {
    this._drawNumber()
    this._drawText()
  }

  update(score){
    this.points = score
  }

  _drawNumber(){
    const offset = (48 * this.multiplier)
    fill(255);
    noStroke();
    textSize(FONT_SIZE * this.multiplier);
    text(this.points, this.x * this.multiplier + offset, this.y * this.multiplier);
  }

  _drawText(){
    fill(this.color);
    noStroke();
    fill(this.color);
    textSize(FONT_SIZE * this.multiplier);
    text(this.text, this.x * this.multiplier, this.y * this.multiplier);
  }
}

export default Score;
