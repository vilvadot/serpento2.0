import Players from "./Players";

class Game {
  constructor() {
    this.time = 60;
    this.players = new Players();
  }

  start() {
    console.log("game has started!");
  }

  updatePlayers(trackedPlayers) {
    trackedPlayers.forEach(blob => {
      const activePlayer = this.players.find(blob);
      if (!activePlayer) {
        return this.players.add(blob);
      }
      return activePlayer.update(blob);
    });
  }

  updateTime() {
    this.time++;
  }

  update() {
    this.updateTime();
    this.players.draw();
  }
}

export default Game;
