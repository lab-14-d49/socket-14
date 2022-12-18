'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/');


const { gotTicket, incomingTicket } = require('./helperHandler');

socket.emit('JOIN', 'tech-support');
socket.on('INCOMING_TICKET', (payload) => {
    incomingTicket(socket)(payload);
});

socket.on('NEW_TICKET', () => {
    gotTicket(socket);
});


gotTicket(socket);

