'use strict';

const { incomingTicket, gotTicket } = require('./helperHandler');

const socket = jest.fn();

console.log = jest.fn();

afterAll(() => {
  socket.close();
});
describe('helper unit tests', () => {
  it('receives a message when a ticket is received', () => {
    const resolveTicket = jest.fn();
    const payload = {
      message: 'testing',
    };

    incomingTicket(socket => payload);
    // expect(console.log).toHaveBeenCalledWith(payload);
  });

  it('receives a message when a ticket is received', () => {
    const resolveTicket = jest.fn();
    const payload = {
      message: 'testing',
    };

    // gotTicket(socket => payload);
    // expect(console.log).toHaveBeenCalledWith(payload);
  });
});