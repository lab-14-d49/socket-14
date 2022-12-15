'use strict' ;


// requirements

require('dotenv').config();

const { listen } = require('engine.io');
const { Server } = require('socket.io');
const Queue = require('./lib/queue');
const PORT = process.env.PORT;
const server = new Server(PORT);

console.log('listening on PORT:',PORT);

server.on('connection', (socket) => {
  
socket.onAny((event, payload) => {
  const time = new Date();
  console.log('EVENT:' { event, time, payload });
});

socket.on('JOIN', (id) => {
  socket.join(id);
  console.log('Joined The Room:', id);

  socket.broadcast.emit('JOIN', payload, id);
});

console.log('The socket connected to the server:', socket.id);



} )