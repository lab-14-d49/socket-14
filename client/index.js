'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/');

const { createTicket } = require('./clientHandler');

socket.emit('JOIN', 'New Ticket');



socket.on('NEW_TICKET', (payload) => )
