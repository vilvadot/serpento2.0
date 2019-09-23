const Replayer = require('./Replayer')
const fs = require('fs')
const path = require('path')

const recordsPath = path.resolve(__dirname, './tracking.json')
const messages = fs.readFileSync(recordsPath, 'UTF-8')

const FREQUENCY = 1000

const replayer = new Replayer(JSON.parse(messages), FREQUENCY)

replayer.replay((message) => {
  console.log(message)
  // Emmit "OSC" message through bus to imitate CCV server
})
