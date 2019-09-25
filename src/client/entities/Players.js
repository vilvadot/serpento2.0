import Snake from "./Snake";
import Collision from "./Collision";
import bus from "../bus";
import { FOOD_EATEN } from "../events";

class PlayerCollection {
  constructor(food) {
    this.players = [];
    this.food = food;
  }

  updateFood(food) {
    this.food = food;
  }

  update(id, blob) {
    const player = this.find(id);
    player.update(blob);
  }

  add(player) {
    const { id, x, y } = player;
    this.players.push(new Snake(id, x, y));
  }

  find(id) {
    return this.players.find(player => player.id === id);
  }

  draw() {
    this.players.forEach(player => {
      const isEaten = Collision.check(
        player.x,
        player.y,
        this.food.x,
        this.food.y
      );
      if (isEaten) bus.emit(FOOD_EATEN);
      player.draw();
    });
  }
}

export default PlayerCollection;
