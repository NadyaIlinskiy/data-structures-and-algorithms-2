'use strict';

// Require the module we're testing
const LinkedList = require('../linked-list.js');
const llMerge = require('../llMerge.js');

describe('Merges the two lists', () => {
  
  it('can successfully merge two lists of same length ', () => {
    
    let list1 = new LinkedList();
    list1.append(1).append(3).append(5);
    let list2 = new LinkedList();
    list2.append(2).append(4).append(6);
   let glist = llMerge(list1, list2);

    expect(result).toEqual('1,2,3,4,5,6');
  });

});