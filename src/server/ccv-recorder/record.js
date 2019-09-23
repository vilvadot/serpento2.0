// Records CCV data to replay it without needing the program open

const events = require("events");
const OSCClient = require("../networking/OSCClient");
const Recorder = require("./Recorder");
const path = require("path");

require("dotenv").config();

const { CV_IP, CV_PORT, RECORD_TIME } = process.env;

const recordsFile = path.resolve(__dirname, "./tracking.json")

const bus = new events.EventEmitter();
const osc = new OSCClient(bus);
const recorder = new Recorder(bus, recordsFile);

osc.connect(CV_IP, CV_PORT);

recorder.record(osc.message);

setTimeout(() => {
  recorder.stop();
}, RECORD_TIME || 10000);