import SnakeSegment from "./SnakeSegment";
import config from "../config";
import { random, translateX, translateY } from "../utilities";

const BLINK_DURATION = 100;

class Snake {
  constructor(id, x, y) {
    this.id = id;
    this.points = 0;
    this.color = this._getRandomColor();
    this.x = translateX(x);
    this.y = translateY(y);
    this.isBlinking = false;
    this.segments = [new SnakeSegment(this.color)];
  }

  eat() {
    this.points++
    this._blink();
  }

  update({ x, y }) {
    this.x = translateX(x);
    this.y = translateY(y);
  }

  draw() {
    this.segments.forEach(segment => segment.draw(this.x, this.y, this.color));
    if(config.debug) this._debug();
  }

  _debug() {
    const fontSize = config.screenSize * 6;
    noStroke();
    fill(255);
    textSize(fontSize);
    text(`id: ${this.id}, x: ${this.x}, y: ${this.y}`, this.x + 20, this.y);
  }

  _blink() {
    if (!this.isBlinking) {
      const oldColor = this.color;
      this.color = "#fff";
      this.isBlinking = true;
      setTimeout(() => {
        this.color = oldColor;
        this.isBlinking = false;
      }, BLINK_DURATION);
    }
  }

  _getRandomColor() {
    const randomIndex = random(config.teams.red.length);
    return config.teams.red[randomIndex];
  }
}

export default Snake;

// const createSnake = (game, p5, player, snakeColor, snakeIndex, team) => {

//   const snake = [];
//   let i;
//   snake.push(
//         new SnakeSegment(
//           p5,
//           `${player.id}`,
//           team,
//           0,
//           undefined,
//           segmentLength,
//           0, // If you see lines popping up its this line set to 0
//           snakeColor,
//           Number(player.y)*canvasHeight + canvasTopOffset,
//           Number(player.x)*canvasWidth
//       ));
//   for(i = 1; i < segmentNum; i++ ){
//     snake.push(
//         new SnakeSegment(
//           p5,                                            // p5
//           `${player.id}-${i== segmentNum-1 ? 'head':i}`, // id
//           team,
//           snakeIndex,                                    // index
//           snake[i-1],                                    // parent
//           segmentLength,                                 // Length
//           (headWeight/segmentNum)*(i),
//           snakeColor
//         )
//       );
//   }
//   return snake;
// };

// const drawSnake = (game, segments, position, food) => {
//   let i = segments.length - 1;
//   for(i; i >= 0; i--){
//     segments[i].draw();
//     if(segments[i].id.includes('head')){
//       segments[i].checkIfEaten(game, food);
//       // Head follows the tracking positions
//       segments[i].follow(
//               Number(position.x)*canvasWidth,
//               Number(position.y)*canvasHeight + canvasTopOffset
//               );
//     }else{
//       // Rest of the segments follows previous link (snake is built in reverse)
//       segments[i].follow(segments[i+1].a.x, segments[i+1].a.y);
//     }
//     segments[i].update();
//   }
// };
