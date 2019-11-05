'use strict';

// Require the module we're testing
const { Stack, Queue } = require('../stacks-and-queues.js');

describe('Performs Stack manipulations', () => {
  const st = new Stack();
  it('can successfully push onto a stack ', () => {
    st.push(4);
    let result = st.print();
    expect(result).toEqual('4');

  });
  
  it('can successfully push multiple values onto a stack', () => {
    st.push(5);
    st.push(6);
    st.push(7);
    let result = st.print();
    expect(result).toEqual('7,6,5,4');
  });

  it('can successfully pop off the stack', () => {
    let top = st.pop();
    let result = st.print();
    expect(result).toEqual('6,5,4');
    expect(top).toEqual(7);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    st.pop();
    st.pop();
    st.pop();
    st.pop();
    let result = st.print();
    expect(result).toBeFalsy();
  });

  it('Can successfully peek the next item on the stack', () => {
    st.push(5);
    st.push(6);
    let result = st.peek();
    expect(result).toEqual(6);
  });

  it('Can successfully instantiate an empty stack', () => {
    const st = new Stack();
    let result = st.peek();
    expect(result).toEqual(null);
  });

});  

describe('Performs Queue manipulations', () => {
  const qu = new Queue();
  it('Can successfully enqueue into a queue ', () => {
    qu.enqueue(3);
    let result = qu.print();
    expect(result).toEqual('3');
  });
  it('Can successfully enqueue multiple values into a queue ', () => {
    qu.enqueue(4);
    qu.enqueue(5);
    qu.enqueue(6);
    let result = qu.print();
    expect(result).toEqual('3,4,5,6');
  });

  it('Can successfully dequeue out of a queue the expected value ', () => {
    qu.dequeue();
    let result = qu.print();
    expect(result).toEqual('4,5,6');
  });
  it('Can successfully peek into a queue, seeing the expected value ', () => {  
    let result = qu.peek();
    expect(result).toEqual(4);
  });
  it('Can successfully empty a queue after multiple dequeues ', () => {
    qu.dequeue();
    qu.dequeue();
    qu.dequeue();
    let result = qu.print();
    expect(result).toEqual('');
  });
  it('Can successfully instantiate an empty queue ', () => {
    const qu = new Queue();
    let result = qu.print();
    expect(result).toEqual('');
  });

}); 