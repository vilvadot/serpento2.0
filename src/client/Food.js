import {FOOD_EATEN} from './events'
import {bus} from './main'
import {random} from './utilities'

const FONT_SIZE = 10;
const DEFAULT_SIZE = 20;

class Food {
  constructor(multiplier = 1) {
    this.multiplier = multiplier;
    this.x = random(192 * this.multiplier, 0);
    this.y = random(157 * this.multiplier, 32 * this.multiplier);
    this.size = DEFAULT_SIZE;
    this.food;
  }

  load(foods) {
    this.foodBank = foods;
    this.updateFood();
  }

  updateFood() {
    const randomIndex = random(this.foodBank.length);
    return (this.food = this.foodBank[randomIndex]);
  }

  debug() {
    noStroke();
    fill("#EE0D61");
    textSize(FONT_SIZE * this.multiplier);
    const x = this.x.toFixed(0);
    const y = this.y.toFixed(0);
    text(`x:${x}, y:${y}`, this.x + 20, this.y + 20);
  }

  reposition() {
    this.x = random(192 * this.multiplier)
    this.y = random(157 * this.multiplier, 32 * this.multiplier)
  }

  eat() {
    bus.emit(FOOD_EATEN)
    this.reposition();
  }

  draw() {
    noStroke();
    image(this.food, this.x, this.y, this.size, this.size);
    this.debug();
  }
}

export default Food;
