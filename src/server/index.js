const events = require("events");
const http = require("http").Server();
const io = require("socket.io")(http);
const OSCClient = require("./OSCClient");
require("dotenv").config();

const { CV_IP, CV_PORT, PORT } = process.env;
const activeClients = [];
const communicationBus = new events.EventEmitter();

new OSCClient(CV_IP, CV_PORT, communicationBus).start()

http.listen(PORT, () => {
  console.log(`listening sockets on: ${PORT}`);
  communicationBus.emit("message", "AFADFaf");
});

// SOCKET.IO Loop
io.on("connection", socket => {
  socket.on("hi", userId => {
    console.log("user connected: " + userId);
    activeClients.push(userId);
  });
  socket.on("disconnect", () => {
    const disconnectedUser = activeClients.indexOf(socket);
    activeClients = activeClients.splice(disconnectedUser, 1);
    console.log("Got disconnect!" + disconnectedUser);
  });
  communicationBus.on("OSC", msg => {
    socket.emit("osc-stream", msg);
  });
});
