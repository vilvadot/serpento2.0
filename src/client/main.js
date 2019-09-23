import p5 from "p5";
import Arena from "./Arena";
import mockData from "./mock_tracking.json";
import Replayer from "../replayer/Replayer";
import Scoreboard from "./Scoreboard";
import Logo from "./Logo";
import Timer from "./Timer";
import Food from "./Food";
import Game from "./Game";
import Assets from "./Assets";

var EventEmitter = require("eventemitter3");

require("dotenv").config();

global.p5 = p5;

let { SCREEN_SIZE } = process.env;
const FREQUENCY = 1000;

const fakeServer = new Replayer(mockData, FREQUENCY);

export const bus = new EventEmitter();
const game = new Game();
const arena = new Arena(SCREEN_SIZE);
const scoreBoard = new Scoreboard(SCREEN_SIZE);
const logo = new Logo(SCREEN_SIZE);
const timer = new Timer(SCREEN_SIZE);
const food = new Food(SCREEN_SIZE);

fakeServer.replay(message => {
  game.updatePlayers(message.blobs);
});

let assets;

const sketch = () => {
  preload = () => {
    assets = Assets.getAssets();
  };

  setup = () => {
    createCanvas(1000, 600);
    background(0);
    game.start();
    food.load(assets.foods);
    textFont(assets.font);
  };

  draw = () => {
    background(0);
    game.update();
    arena.draw();
    logo.draw(assets.logo);
    scoreBoard.draw();
    timer.draw(game.time);
    food.draw();
  };
};

new p5(sketch);
