import config from "./config";
import { TIMER_RESET } from "./events";

const FONT_SIZE = 19;
const TIME_IN_SECONDS = config.foodCountdown;
const DEFAULT_TIME = TIME_IN_SECONDS * 1000;

export default class TimeMarker {
  constructor(bus) {
    this.bus = bus;
    this.time = DEFAULT_TIME;
    this.multiplier = config.screenSize;
    this.x = 125;
    this.y = 28;
  }

  draw() {
    this._updateTime();
    textSize(FONT_SIZE * this.multiplier);
    fill(255);
    text(
      this._getTimeString(),
      this.x * this.multiplier,
      this.y * this.multiplier
    );
  }

  _convertToSeconds(time) {
    return Math.ceil(time / 1000);
  }

  _resetTimer() {
    this.time = DEFAULT_TIME;
    this.bus.emit(TIMER_RESET);
  }

  _getTimeString() {
    const timeInSeconds = this._convertToSeconds(this.time);

    const text = timeInSeconds > 9 ? timeInSeconds : `0${timeInSeconds}`;
    return text;
  }

  _updateTime() {
    this.time -= 10;
    if (this.time <= 0) {
      this._resetTimer();
    }
  }
}
