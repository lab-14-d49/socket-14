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
    const sendToUser = {};
    const choice = ['Tell the user to turn it off, then back on',
      'Place the user on hold, and take a nap',
      'Take control of the users email account and read all their emails.']
    const resolvedData = await inquirer

      .prompt([
        {
          type: 'list',
          name: 'resolve',
          message: 'Please choose how you will resolve this ticket.',
          choices: choice,
        },
      ]);


    if (resolvedData.resolve === choice[0]) {
      sendToUser.reply = 'Please turn off your device, then power it back on.';
    } else if (resolvedData.resolve === choice[1]) {
      sendToUser.reply = 'Please hold while we look into your issue.';
    } else if (resolvedData.resolve === choice[2]) {
      sendToUser.reply = 'Please provide us with your login information for your personal email so we can link your POP3';
    }

    socket.emit('RESOLVE_TICKET', { ticket: payload, message: sendToUser.reply });
  }

}


module.exports = { gotTicket, incomingTicket };