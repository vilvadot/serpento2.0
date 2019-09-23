const fs = require("fs");

class Recorder {
  constructor(bus, file) {
    this.bus = bus;
    this.file = file;
    this.count = 0;
    this.lastMessage = {}
    this.stream = fs.createWriteStream(this.file, {
      flags: "r+",
      start: 1
    });
  }

  record(message) {
    this._createFile();
    this.bus.on(message, (data) => this._writeToFile(data));
    this.stream.on("finish", () => {
      console.log(`👍🏻  Messages recorded to ${this.file}`);
    });
  }

  stop() {
    this.bus.removeAllListeners()
    this.stream.end();
    this._writeArrayEnd();
  }

  _createFile() {
    fs.writeFileSync(this.file, "[\n]")
  }

  _writeArrayEnd() {
    fs.appendFileSync(this.file, `${this.lastMessage}]`);
  }

  _writeToFile(message) {
    this.lastMessage = JSON.stringify(message)
    this.stream.write(`${JSON.stringify(message)},\n`);
    this.count++
    console.log(`${this.count} messages recorded`)
  }
}

module.exports = Recorder;
