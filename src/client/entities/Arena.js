import config from '../config'

class Arena {
  constructor() {
    this.multiplier = config.screenSize;
  }

  draw() {
    strokeWeight(3);
    stroke(255);
    fill(0,0,0);
    rect(0, 32 * this.multiplier, config.height * this.multiplier, config.width * this.multiplier);
  }
}

export default Arena