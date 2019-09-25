import Score from './Score'
import config from '../config'

class Scoreboard {
  constructor() {
    this.multiplier = config.screenSize;
    this.marker = new Score('EQUIPO 1', 'red', 40, 28);
  }

  draw() {
    strokeWeight(1);
    stroke(255);
    fill(0, 0, 0);
    rect(
      36 * this.multiplier,
      16 * this.multiplier,
      120 * this.multiplier,
      16 * this.multiplier
    );
    this._drawMiddleLine();
    this._drawScore()
  }

  update(score){
    this.score = score
    this.marker.update(this.score)
  }

  _drawScore(){
    this.marker.draw()
  }

  _drawMiddleLine() {
    line(
      100 * this.multiplier,
      16 * this.multiplier,
      100 * this.multiplier,
      32 * this.multiplier
    );
  }
}

export default Scoreboard;
