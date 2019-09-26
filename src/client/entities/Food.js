import {FOOD_EATEN} from '../events'
import bus from '../bus'
import {random} from '../utilities'
import config from '../config'

const FONT_SIZE = 10;
const DEFAULT_SIZE = 6;

class Food {
  constructor() {
    this.multiplier = config.screen.size
    this.x = random(192 * this.multiplier, 0);
    this.y = random(157 * this.multiplier, 32 * this.multiplier);
    this.size = DEFAULT_SIZE * this.multiplier;
  }

  draw() {
    noStroke();
    image(this.food, this.x, this.y, this.size, this.size);
    if(config.debug) this._debug();
  }

  loadFoods(foods) {
    this.foodBank = foods;
    this._selectRandomFood();
  }

  eat() {
    bus.emit(FOOD_EATEN)
    this.regenerate();
  }

  regenerate() {
    this._selectRandomFood()
    this._setRandomPosition()
  }

  _setRandomPosition(){
    this.x = random(192 * this.multiplier)
    this.y = random(157 * this.multiplier, 32 * this.multiplier)
  }

  _selectRandomFood() {
    const randomIndex = random(this.foodBank.length);
    return (this.food = this.foodBank[randomIndex]);
  }

  _debug() {
    noStroke();
    fill("#EE0D61");
    textSize(FONT_SIZE * this.multiplier);
    const x = this.x.toFixed(0);
    const y = this.y.toFixed(0);
    text(`x:${x}, y:${y}`, this.x + 20, this.y + 20);
  }
}

export default Food;
