import p5 from "p5";

global.p5 = p5;

const sketch = () => {

  setup = () => {
    createCanvas(1000,600)
    background(40)
  };

  draw = () => {
    ellipse(width/2, height/2, 10)
  };
};

new p5(sketch);
