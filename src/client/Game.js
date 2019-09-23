class Game {
  constructor(){
    this.time = 60
    this.players = []
  }

  start(){
    console.log('game has started!')
  }

  updatePlayers(playersPositions){
    this.players = playersPositions
  }

  updateTime(){
    this.time++
  }

  update(){
    this.updateTime()
    this.updatePlayers()
  }
}

export default Game