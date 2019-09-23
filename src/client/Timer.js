import moment from "moment";
import "moment-duration-format";

const FONT_SIZE = 19

export default class TimeMarker {
  constructor(multiplier) {
    this.multiplier = multiplier;
    this.x = 118;
    this.y = 28;
  }

  draw(time) {
    const timeInSeconds = time * 10
    textSize(FONT_SIZE * this.multiplier);
    fill(255);
    text(
      moment(timeInSeconds).format("mm:ss"),
      this.x * this.multiplier,
      this.y * this.multiplier
    );
  }
}
