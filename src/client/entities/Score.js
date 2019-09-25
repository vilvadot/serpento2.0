const FONT_SIZE = 17

class Score {
  constructor(multiplier = 1, text = "EQUIPO", color, x, y) {
    this.text = text;
    this.multiplier = multiplier;
    this.points = 0;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  draw() {
    this._drawNumber()
    this._drawText()
  }

  _drawNumber(){
    const offset = (50 * this.multiplier)
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
