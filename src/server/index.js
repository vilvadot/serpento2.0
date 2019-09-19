const osc = require('node-osc');
const oscToJSON = require('./oscToJSON');
const events = require('events');
const http = require('http').Server();
const io = require('socket.io')(http);
const dotenv = require('dotenv').config()
const eventEmitter = new events.EventEmitter();

const serverIp = '127.0.0.1'; // Communit Core Vision emiting IP
const OSCPort = 3333;  // Communit Core Vision emiting PORT
const SocketPort = 5000;
let activeClients = [];

console.log(process.env.CV_IP)

const oscServer = new osc.Server(OSCPort, serverIp);

http.listen(SocketPort, function(){
    console.log(`listening sockets on: ${SocketPort}`);
})

// Listen for message stream
oscServer.on('message', function (message) {
    console.log(oscToJSON(message));
    // Run in JSOn or in OSC mode
    eventEmitter.emit('OSC', oscToJSON(message), 0, 2);
});

// SOCKET.IO Loop
io.on('connection', function(socket){
    socket.on('hi', function(userId){
        console.log('user connected: ' + userId);
        activeClients.push(userId);
    });
    socket.on('disconnect', function() {
        const disconnectedUser = activeClients.indexOf(socket);
        activeClients = activeClients.splice(disconnectedUser, 1);
        console.log('Got disconnect!' + disconnectedUser);
    });
    eventEmitter.on('OSC', function(msg){
        socket.emit('osc-stream', msg);
    });
});
