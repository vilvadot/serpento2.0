const events = require("events");
const OSCClient = require("./networking/OSCClient");
const Recorder = require("./ccv-recorder-replayer/Recorder");
const path = require("path");

require("dotenv").config();

const { CV_IP, CV_PORT } = process.env;
const RECORDING_TIME = 1000;

const bus = new events.EventEmitter();
const client = new OSCClient(bus);
const recorder = new Recorder(path.resolve(__dirname, "./tracking.json"), bus);

client.connect(CV_IP, CV_PORT);

recorder.record(client.message);

setTimeout(() => {
  recorder.stop();
}, RECORDING_TIME);