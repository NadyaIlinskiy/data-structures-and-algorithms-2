'use strict';

// Require the module we're testing
const LinkedList = require('../linked-list.js');
const llMerge = require('../llMerge.js');

const printNodeSeq = (node) => {
  if (node == null) {
    return '';
  } else {
    let arr = [];
    for (let iter = node; iter != null; iter = iter.next) {
      arr.push(iter.data);
    }
    return arr.toString();
  }
};

describe('Merges the two lists', () => {
  
  it('can successfully merge two lists of same length ', () => {
    
    let list1 = new LinkedList();
    list1.append(1).append(3).append(5);
    let list2 = new LinkedList();
    list2.append(2).append(4).append(6);
    let result = llMerge(list1, list2);  
    expect(printNodeSeq(result)).toEqual('1,2,3,4,5,6');
  });

  it('can successfully merge two lists where list1 is shorter than list2 ', () => {

    let list1 = new LinkedList();
    list1.append(1).append(3);
    let list2 = new LinkedList();
    list2.append(2).append(4).append(6);
    let result = llMerge(list1, list2);
    expect(printNodeSeq(result)).toEqual('1,2,3,4,6');
  });

  it('can successfully merge two lists where list1 is longer than list2 ', () => {

    let list1 = new LinkedList();
    list1.append(1).append(3).append(5);
    let list2 = new LinkedList();
    list2.append(2).append(4);
    let result = llMerge(list1, list2);
    expect(printNodeSeq(result)).toEqual('1,2,3,4');
  });

});