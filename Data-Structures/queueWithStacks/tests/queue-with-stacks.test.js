'use strict';

// Require the module we're testing
const PseudoQueue = require('../queue-with-stacks.js');

describe('Performes Queue manipulations with PseudoQueue', () => {
  const pq = new PseudoQueue();
  it('Can successfully enqueue into your pseudo queue', () => {
    pq.enqueue(4);
    let result = pq.print();
    expect(result).toEqual('4');
  });
  it('Can successfully enqueue multiple values into your queue', () => {
    pq.enqueue(5);
    pq.enqueue(6);
    pq.enqueue(7);
    let result = pq.print();
    expect(result).toEqual('7,6,5,4');
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    let result =  pq.dequeue();
    expect(result).toEqual(4);
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    pq.dequeue();
    pq.dequeue();
    pq.dequeue();
    let result = pq.dequeue();
    expect(result).toBeFalsy();
  });
  it('Can successfully instantiate an empty queue', () => {
    const pq = new PseudoQueue();
    let result = pq.print();
    expect(result).toEqual('');
  });
  it('Can successfully enqueue and dequeue - testing shiftStack functionality', () => {
    pq.enqueue(1);
    pq.enqueue(2);
    pq.dequeue();
    pq.enqueue(3);
    pq.enqueue(4);
    pq.dequeue();
    pq.enqueue(5);
    pq.enqueue(6);
    pq.dequeue();
    let result = pq.print();
    expect(result).toEqual('6,5,4');
  });

});
