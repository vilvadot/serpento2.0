class Logo {
  constructor(multiplier = 1) {
    this.multiplier = multiplier;
  }
  draw(img) {
    strokeWeight(1);
    stroke(255);
    fill(0, 0, 0);
    rect(72 * this.multiplier, 0, 48 * this.multiplier, 16 * this.multiplier);
    image(
      img,
      72 * this.multiplier,
      0,
      48 * this.multiplier,
      16 * this.multiplier
    );
  }
}

export default Logo;
