'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/');


socket.emit('JOIN', 'tech-support');

socket.on('RESOLVED', (payload) => {
  console.log('New message from Tech-support:', `${payload.message}`);
});



