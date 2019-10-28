'use strict';

// Require the module we're testing
const Stack = require('../stacks-and-queues.js');

describe('Performes Stack manipulations', () => {
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

});  