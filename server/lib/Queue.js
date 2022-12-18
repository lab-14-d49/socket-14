'use strict';

class UnsupportedMethodError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnsupportedMethodError';
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  store(value) {
    const node = new Node(value);
    if (this.front === null) {
      this.rear = node;
      this.front = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (!this.front) throw new UnsupportedMethodError('The top is null');
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.value;
  }

  read() {
    if (!this.front) return null;
    return this.front.value;
  }

  isEmpty() {
    if (!this.front) return true;
    return false;
  }

}

module.exports = Queue;
