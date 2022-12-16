'use strict';


// requirements

require('dotenv').config();

const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002;
const server = new Server(PORT);

const Queue = require('./lib/queue');
const ticketQueue = new Queue;

console.log('listening on PORT:', PORT);

server.on('connection', (socket) => {

  socket.onAny((event, payload) => {
    const time = new Date();
    console.log('EVENT:', { event, time, payload });
  });

  socket.on('JOIN', (id) => {
    socket.join(id);
    console.log('Joined The Room:', id);

    socket.emit('JOIN', id);
  });

  console.log('The socket connected to the server:', socket.id);

  socket.on('NEW_TICKET', (payload) => {
    //This is where ticket is stored in the queue
    ticketQueue.store(payload);
    console.log('TICKET CREATED', payload);

    //Responds when ticket is found
    socket.emit('NEW_TICKET', 'Ticket Received');
  });

  socket.on('REQUEST_TICKET', () => {
    let currentTicket = ticketQueue.read();
    let payload; 
    if (!currentTicket){
      payload = {message: 'No tickets'};
    } else {
      payload = ticketQueue.dequeue();
    }
    socket.emit('INCOMING_TICKET', payload);
  });

  socket.on('RESOLVE_TICKET', (payload) => {
    console.log('RESOLVE PL0X :(')
    socket.to('tech-support').emit('RESOLVED', payload);
  });

});