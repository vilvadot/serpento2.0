import p5 from "p5";
import Arena from "./Arena";
import Scoreboard from "./Scoreboard";
import Logo from "./Logo";
import Timer from "./Timer";
import Game from "./Game";
import Assets from "./Assets";
import Server from "./Server";
import bus from "./bus";

require("dotenv").config();

global.p5 = p5;

const arena = new Arena();
const scoreBoard = new Scoreboard();
const logo = new Logo();
const timer = new Timer(bus);
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
    arena.draw();
    logo.draw(assets.logo);
    scoreBoard.draw();
    timer.draw(); // This updated every frame. Should be updated outside the main loop
    game.update();
  };
};

new p5(sketch);
