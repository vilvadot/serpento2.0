// Relays OSC data from CCV to a websocket connection

const events = require("events");
const OSCClient = require("../networking/OSCClient");
const SocketsServer = require("../networking/SocketsServer");

require("dotenv").config();

const { CV_IP, CV_PORT } = process.env;

const bus = new events.EventEmitter();

new OSCClient(bus).connect(CV_IP, CV_PORT);
new SocketsServer(bus).start();
