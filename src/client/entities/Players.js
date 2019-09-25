import Snake from "./Snake";

class PlayerCollection {
  constructor() {
    this.players = [];
  }

  update(id, blob){
    const player = this.find(id);
    player.update(blob)
  }

  add(player) {
    const { id, x, y } = player;
    this.players.push(new Snake(id, x, y));
  }

  find(id) {
    return this.players.find(player => player.id === id);
  }

  draw() {
    this.players.forEach(player => player.draw());
  }
}

export default PlayerCollection;
