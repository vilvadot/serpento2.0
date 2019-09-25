import bus from "./bus";
import {MOUSE_POSITION} from './events'

class Mouse {
  static handleMouseMove(event) {
    bus.emit(MOUSE_POSITION, {id: 'mouse', x: event.pageX, y: event.pageY})
    // Use event.pageX / event.pageY here
    console.log(event.pageX, event.pageY);
  }

  static track() {
    document.onmousemove = this.handleMouseMove;
  }
}

export default Mouse
