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
  it('Can successfully insert a node after the last node of the linked list', () => {
    ls.append(5);
    expect(ls.toString()).toEqual('9,4,5');
  });
  it('Can successfully insert a node before the first node of a linked list', () => {
    ls.insertBefore(4, 3);
    expect(ls.toString()).toEqual('9,3,4,5');
  });
  it('Can successfully insert after a node in the middle of the linked list', () => {
    ls.insertAfter(9, 7);
    expect(ls.toString()).toEqual('9,7,3,4,5');
  });

  it('List is not modified if element does not exists in the List', () => {
    ls.insertBefore(1, 13);
    expect(ls.toString()).toEqual('9,7,3,4,5');
  });
  it('List is not modified if element does not exists in the List', () => {
    ls.insertAfter(1, 13);
    expect(ls.toString()).toEqual('9,7,3,4,5');
  });
  //k
  it('Returns null if k is greater than the length of the linked list', () => {
    let res = ls.kthFromEnd(6);  
    expect(res).toBeFalsy();
  });
  it('Returns null if k and the length of the list are the same', () => {
    let res = ls.kthFromEnd(5);  
    expect(res).toEqual(9);
  });
  it('Returns null if k is not a positive integer', () => {
    let res = ls.kthFromEnd(-6);  
    expect(res).toBeFalsy();
  });
  it('Returns head if the linked list is of a size 1', () => {
    let ls = new LinkedList();
    ls.insert(2);
    let res = ls.kthFromEnd(1);  
    expect(res).toEqual(2);
  });
  it('Returns kth node value if k is not at the end, but somewhere in the middle of the linked list', () => {
    let res = ls.kthFromEnd(2);  
    expect(res).toEqual(4);
  });

});




