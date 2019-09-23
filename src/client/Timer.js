import moment from "moment";
import "moment-duration-format";

let horizPos = 125;

export default class TimeMarker {
  constructor(multiplier) {
    this.multiplier = multiplier;
    this.time = 0;
  }
  draw(time) {
    this.time = time;
    fill(255);
    if (this.time >= 60) {
      horizPos = 120;
    }
    text(
      moment.duration(this.time, "seconds").format("mm:ss"),
      horizPos * this.multiplier,
      28 * this.multiplier
    );
  }
}
