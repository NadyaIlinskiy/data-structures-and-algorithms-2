'use strict';

// Require the module we're testing
const LinkedList = require('../linked-list.js');

describe('Performes incert, includes and toString actions on Linked List correctly', () => {
  let ls =  new LinkedList();

  it('can successfully instantiate an empty linked list ', () => {
    expect(ls.toString()).toEqual('List is Empty');
  });

  it('can properly insert into the linked list', () => {
    ls.insert(4);
    expect(ls.toString()).toEqual('4');
  });


  it('Can properly insert multiple nodes into the linked list', () => {
    ls.insert(9);
    expect(ls.toString()).toEqual('9,4');
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(ls.toString()).toEqual('9,4');
  });


  it('Will return true when finding a value within the linked list that exists', () => {
    expect(ls.includes(4)).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(ls.includes(10)).toBeFalsy();
  });

  it('The head property will properly point to the first node in the linked list', () => {
    expect(ls.head.data).toEqual(9);
  });

});




