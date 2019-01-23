import p5 from "p5";
import { setupCanvas, drawBallAttachedToMouse } from "./lib/ballExample";

global.p5 = p5;

const sketch = () => {

  setup = () => {
    setupCanvas()
  };

  draw = () => {
    drawBallAttachedToMouse()
  };
};

new p5(sketch);
