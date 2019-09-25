class Replayer {
  constructor(messages, frequency) {
    this.messages = messages;
    this.frequency = frequency;
  }

  replay(callback) {
    let index = 0;
    setInterval(() => {
      const isLastMessage = index === this.messages.length - 2;
      if (isLastMessage) {
        return index = 0;
      }
      index++;
      callback(this.messages[index]);
    }, this.frequency);
  }
}

module.exports = Replayer;
