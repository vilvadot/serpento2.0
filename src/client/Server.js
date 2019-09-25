import Replayer from '../replayer/Replayer'
import mockData from './mock_tracking.json'
import bus from './bus'
import {PLAYER_POSITIONS} from './events'

const FREQUENCY = 500

class Server {

  static start() {
    const trackingDataReplayer = new Replayer(mockData, FREQUENCY);

    trackingDataReplayer.replay(message => {
      bus.emit(PLAYER_POSITIONS, message.blobs);
    });
  }
}

export default Server