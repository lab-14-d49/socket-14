'use strict';
const { createTicket } = require('./clientHandler');
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/');


createTicket(socket);
