import bus from "./bus";
import {MOUSE_POSITION} from './events'
import config from './config'

class Mouse {
  static handleMouseMove(event) {

    const x = event.pageX / window.innerWidth
    const y = event.pageY / window.innerHeight
    bus.emit(MOUSE_POSITION, {id: 'mouse', x, y})
  }

  static track() {
    document.onmousemove = this.handleMouseMove;
  }
}

export default Mouse
