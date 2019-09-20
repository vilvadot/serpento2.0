const Replayer = require('./ccv-recorder-replayer/Replayer')
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, './tracking.json')
const messages = fs.readFileSync(filePath, 'UTF-8')

const FREQUENCY = 1000

const server = new Replayer(JSON.parse(messages), FREQUENCY)

server.replay((message) => {
  console.log(message)
})
