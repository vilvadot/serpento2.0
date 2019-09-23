import p5 from "p5";
import Arena from './Arena'
import mockData from './mock_tracking.json'
import Replayer from '../replayer/Replayer'
import Scoreboard from "./Scoreboard";
import Logo from "./Logo";
import Timer from "./Timer";
require('dotenv').config()

global.p5 = p5;

const {SCREEN_SIZE} = process.env
const FREQUENCY = 1000

const fakeServer = new Replayer(mockData, FREQUENCY)

class Game {
  constructor(){
    this.players = []
  }

  start(){
    console.log('game has started!')
  }

  updatePlayers(playersPositions){
    this.players = playersPositions
  }
}

const game = new Game()
const arena = new Arena(SCREEN_SIZE)
const scoreBoard = new Scoreboard(SCREEN_SIZE)
const logo = new Logo(SCREEN_SIZE)
const timer = new Timer(SCREEN_SIZE)

fakeServer.replay((message) => {
  game.updatePlayers(message.blobs)
  // Emmit "OSC" message through bus to imitate CCV server
})


let assets

const loadAssets = () => {
  return {
    logo: loadImage(require('./assets/img/logo.png'))
  }
}


const sketch = () => {
  preload = () => {
    assets = loadAssets()
  };

  setup = () => {
    createCanvas(1000,600)
    background(0);
    game.start()
  };

  draw = () => {
    arena.draw()
    scoreBoard.draw()
    logo.draw(assets.logo)
    timer.draw()
    ellipse(width/2, height/2, 10)
  };
};

new p5(sketch);
