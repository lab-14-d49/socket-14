'use strict';

const { Chance } = require('chance');
const chance = new Chance();

const gotTicket = (socket) => {
    socket.emit('REQUEST_TICKET', 'Ask for New Ticket');
};

const incomingTicket = (socket) => (payload) => {
    console.log('Received ticket');
    resolveTicket(socket)(payload);
}

const resolveTicket = (socket) => (payload) => {
    let resolvedPayload =
    {
        message: `Ticket Error ${payload.description} resolved`
    }
    socket.emit('RESOLVE_TICKET', resolvedPayload);
}


module.exports = { gotTicket, incomingTicket };