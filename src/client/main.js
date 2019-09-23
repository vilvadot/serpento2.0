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
import config from './config'

var EventEmitter = require("eventemitter3");

require("dotenv").config();

global.p5 = p5;

const FREQUENCY = 50;

const fakeServer = new Replayer(mockData, FREQUENCY);

fakeServer.replay(message => {
  game.updatePlayers(message.blobs);
});

export const bus = new EventEmitter();
const game = new Game();
const arena = new Arena(config.screenSize);
const scoreBoard = new Scoreboard(config.screenSize);
const logo = new Logo(config.screenSize);
const timer = new Timer(config.screenSize);
const food = new Food(config.screenSize);
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
    arena.draw();
    logo.draw(assets.logo);
    scoreBoard.draw();
    timer.draw(game.time); // This updated every frame. Should be updated outside the main loop
    food.draw();
    game.update();
  };
};

new p5(sketch);
