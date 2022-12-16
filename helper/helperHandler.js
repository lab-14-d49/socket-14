'use strict';

const inquirer = require('inquirer');



const gotTicket = async (socket) => {
  const begin = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'check',
        message: 'Would you like to check for new ticket?',
        choices: ['yes', 'Exit Application'],
      },
    ]);
  if (begin.check === 'Exit Application') process.exit();

  socket.emit('REQUEST_TICKET', 'Ask for New Ticket');

};

const incomingTicket = (socket) => (payload) => {
  console.log(payload);
  resolveTicket(socket)(payload);
};

const resolveTicket = (socket) => async (payload) => {
  if (payload.helper) {
    const resolvedData = await inquirer
      .prompt([
        {
          type: 'list',
          name: 'resolve',
          message: 'Please choose how you will resolve this ticket.',
          choices: ['Tell the user to turn it off, then back on',
            'Place the user on hold, and take a nap',
            'Take control of the users email account and read all their emails.'],
        },
      ]);

    socket.emit('RESOLVE_TICKET', { message: 'You successfully resolved a ticket', method: resolvedData.resolve });
  }

}


module.exports = { gotTicket, incomingTicket };