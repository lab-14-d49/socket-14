'use strict';

const { Chance } = require('chance');
const inquirer = require('inquirer');
const chance = new Chance();

const createTicket = async (socket) => {
  const begin = await inquirer
    .prompt([
      {
        type: 'list',
        name: 'begin',
        message: 'Please make a selection',
        choices: ['Create new ticket', 'Cancel'],
      },
    ]);
  if (begin.begin === 'Cancel') return;
  const ticketData = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',

      },
      {
        type: 'input',
        name: 'issue',
        message: 'Please describe the nature of your issue?',
      },
    ]);
  const payload = {
    name: ticketData.name,
    //Add Inquire Feature after MVP
    ticket: chance.guid(),
    ticketId: chance.guid(),
    description: ticketData.issue,
    helper: 'tech-support',
  };
  socket.emit('NEW_TICKET', payload);
  console.log('NEW TICKET CREATED');
  setTimeout(() => createTicket(socket), 1500);
};

module.exports = { createTicket };