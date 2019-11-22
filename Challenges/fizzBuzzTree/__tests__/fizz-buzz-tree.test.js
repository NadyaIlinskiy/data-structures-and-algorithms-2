'use strict';

// Require the module we're testing
const Rev = require('../fizz-buzz-tree.js');

// Incorrect parameter
// Tree with only one Node
// Tree with root and only one left child
// Tree with no values divisible by 3 or 5
// Tree with values divisible by 3, by 5 and by both 3 and 5

describe('Reverse array via new array', () => {
  it('returnes reversed array - numbers', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    let revArr = [6, 5, 4, 3, 2, 1];
    let ar = Rev.aReverseViaNewArr(arr);

    expect(ar).toEqual(revArr);
  });

  
});
