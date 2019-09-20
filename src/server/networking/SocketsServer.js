const server = require("http").Server();
const io = require("socket.io")(server);
require("dotenv").config();

const { PORT } = process.env;

class SocketsServer {
  constructor(bus) {
    this.clients = [];
    this.bus = bus
  }

  _listenToConnection() {
    this.socket.on("hi", clientId => {
      console.log(`✳️  Connected: ${clientId}`);
      this.clients.push(clientId);
    });
  }

  _listenDisconnection() {
    this.socket.on("disconnect", () => {
      const clientID = this.clients.indexOf(socket);
      this.clients = this.clients.splice(clientID, 1);
      console.log(`🔴  Disconnected: ${clientId}`);
    });
  }

  _relayOSCMessage() {
    this.bus.on("OSC", message => {
      console.log(message)
      this.socket.emit("osc-stream", message);
    });
  }

  start() {
    io.on("connection", socket => {
      this.socket = socket;
      this._listenDisconnection();
      this._listenToConnection();
      this._relayOSCMessage();
    });

    console.log(`🔌  Awaiting sockets on port: ${PORT}`);

    // server.listen(PORT, () => {
    //   console.log(`listening sockets on: ${PORT}`);
    // });
  }
}

module.exports = SocketsServer;
