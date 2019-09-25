import p5 from "p5";
import Game from "./Game";
import Assets from "./Assets";
import Server from "./Server";
import bus from "./bus";

require("dotenv").config();

global.p5 = p5;

let assets, game;

const sketch = () => {
  preload = () => {
    assets = Assets.getAssets();
    game = new Game(assets, bus);
  };

  setup = () => {
    Server.start();
    createCanvas(1000, 600);
    background(0);
    textFont(assets.font);
    game.start();
  };

  draw = () => {
    background(0);
    game.update();
  };
};

new p5(sketch);
