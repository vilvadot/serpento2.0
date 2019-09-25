import SnakeSegment from './SnakeSegment'
import config from "../config";
import { random } from "../utilities";

const translateXToCanvas = x => {
  return Math.floor(x * config.width * config.screenSize + config.widthOffset);
};

const translateYToCanvas = y => {
  return Math.floor(y * config.height * config.screenSize + config.heightOffset);
};

class Snake {
  constructor(id, x, y) {
    this.id = id;
    this.color = this._getRandomColor();
    this.x = translateXToCanvas(x);
    this.y = translateYToCanvas(y);
    this.segments = [new SnakeSegment(this.color)]
  }

  update({ x, y }) {
    this.x = translateXToCanvas(x);
    this.y = translateYToCanvas(y);
  }

  draw() {
    this.segments.forEach(segment => segment.draw(this.x, this.y))
    this._debug();
  }

  _debug() {
    const fontSize = config.screenSize * 6;
    noStroke();
    fill(255);
    textSize(fontSize);
    text(`id: ${this.id}, x: ${this.x}, y: ${this.y}`, this.x + 20, this.y);
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