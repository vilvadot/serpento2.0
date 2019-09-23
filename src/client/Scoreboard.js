class Scoreboard {
  constructor(multiplier = 1, markers) {
    this.multiplier = multiplier;
    this.markers = markers;
  }
  draw() {
    strokeWeight(1);
    stroke(255);
    fill(0,0,0);
    rect(36*this.multiplier, 16*this.multiplier, 120*this.multiplier, 16*this.multiplier);
  }
}

export default Scoreboard