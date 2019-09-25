import config from '../config'

class Logo {
  constructor(image) {
    this.multiplier = config.screenSize;
    this.image = image
  }

  draw() {
    strokeWeight(1);
    stroke(255);
    fill(0, 0, 0);
    rect(72 * this.multiplier, 0, 48 * this.multiplier, 16 * this.multiplier);
    image(
      this.image,
      72 * this.multiplier,
      0,
      48 * this.multiplier,
      16 * this.multiplier
    );
  }
}

export default Logo;
