'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/');

const createTicket = (socket) => (payload) => {
  console.log('FAKE TICKET CREATED FAKE')
  socket.emit('CREATE_TICKET', createTicket);
};


modules.export = createTicket;