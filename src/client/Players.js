import Snake from "./Snake";

class PlayerCollection {
  constructor() {
    this.players = [];
  }

  add(player) {
    const { id, x, y } = player;
    this.players.push(new Snake(id, x, y));
  }

  find(candidate) {
    return this.players.find(player => player.id === candidate.id);
  }

  draw() {
    this.players.forEach(player => player.draw());
  }
}

export default PlayerCollection;
