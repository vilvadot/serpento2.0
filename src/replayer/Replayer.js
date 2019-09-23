class Replayer {
  constructor(messages, frequency){
    this.messages = messages
    this.frequency = frequency
  }

  replay(callback){
    let index = 0
    setInterval(() => {
      callback(this.messages[index])
      index++
    }, this.frequency)
  }
}

module.exports = Replayer