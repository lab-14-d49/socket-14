'use strict';

const { Chance } = require('chance');
const chance = new Chance();

const createTicket = (socket) => {
  console.log('NEW TICKET CREATED');
  const payload = {
    name: 'Jacob',
    //Add Inquire Feature after MVP
    ticket: chance.guid(),
    ticketId: chance.guid(),
    description: 'Description of Issue',
    helper: 'tech-support',
  }

  socket.emit('NEW_TICKET', payload);
};

module.exports = {createTicket};