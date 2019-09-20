const osc = require("node-osc");
const CVPacket = require("./CVPacket");

class OSCClient {
  constructor(bus) {
    this.bus = bus;
    this.message = "OSC";
  }

  connect(ip, port) {
    this.client = new osc.Server(port, ip);

    console.log(`⚡️  Connected to OSC: ${ip}:${port}`);

    this.client.on("message", data => {
      const jsonMessage = new CVPacket(data).toJson();
      this.bus.emit(this.message, jsonMessage, 0, 2);
    });
  }
}

module.exports = OSCClient;
