const osc = require("node-osc");
const OSCMessage = require("./OSCMessage");

class OSCClient {
  constructor(ip, port, bus) {
    this.client = new osc.Server(port, ip);
    this.bus = bus;
  }

  start() {
    this.client.on("message", message => {
      const jsonMessage = new OSCMessage(message).toJson()
      console.log(message)
      this.bus.emit("OSC", jsonMessage, 0, 2);
    });
  }
}

module.exports = OSCClient