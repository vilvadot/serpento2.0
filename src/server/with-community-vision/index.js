const events = require("events");
const OSCClient = require("./OSCClient");
const SocketsServer = require("./SocketsServer");

require("dotenv").config();

const { CV_IP, CV_PORT } = process.env;

const bus = new events.EventEmitter();

new OSCClient(bus).connect(CV_IP, CV_PORT);
new SocketsServer(bus).start();
