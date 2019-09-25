import p5 from "p5";
import Game from "./Game";
import Assets from "./Assets";
import Server from "./Server";
import Mouse from "./Mouse";
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
    Mouse.track()
    Server.start();
    console.log('hey!')
    createCanvas(1000, 600);
    background(0);
    textFont(assets.font);
    game.start();
    document.querySelector("#defaultCanvas0").remove() // remove weird extra canvas
  };

  draw = () => {
    background(0);
    game.update();
  };
};

new p5(sketch);
