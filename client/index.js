'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/');
const { createTicket } = require('./clientHandler');

socket.emit('JOIN', 'tech-support');

socket.on('RESOLVED', (payload) => {
console.log('Thanks for fixing', `${payload.message}`);
});

setInterval(() => {
    createTicket(socket)
}, 3000);