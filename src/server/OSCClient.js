const osc = require("node-osc");
const CVMessage = require("./CVMessage");

class OSCClient {
  constructor(bus) {
    this.bus = bus;
  }

  connect(ip, port) {
    this.client = new osc.Server(port, ip);

    console.log(`⚡️  Connected to OSC: ${ip}:${port}`)
    
    this.client.on("message", message => {
      const jsonMessage = new CVMessage(message).toJson()
      this.bus.emit("OSC", jsonMessage, 0, 2);
    });
  }
}

module.exports = OSCClient