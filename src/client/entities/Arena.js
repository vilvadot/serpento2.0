import config from '../config'

class Arena {
  constructor() {
    this.multiplier = config.screen.size;
  }

  draw() {
    strokeWeight(3);
    stroke(255);
    fill(0,0,0);
    rect(0, 32 * this.multiplier, config.screen.height * this.multiplier, config.screen.width * this.multiplier);
  }
}

export default Arena