'use strict';

// Require the module we're testing
const Rev = require('../array-shift.js');

describe('Verify for array with even and odd number of values', () => {
  it('Verify for array with even number of values', () => {
    let arr = [2,4,6,8];
    let val = 5;
    let revArr = [2,4,5,6,8];
    let ar = Rev.insertShiftArray(arr, val);

    expect(ar).toEqual(revArr);
  });

  it('Verify for array with odd number of values', () => {
    let arr = [4,8,15,23,42];
    let val = 16;
    let revArr = [4,8,15,16,23,42];
    let ar = Rev.insertShiftArray(arr, val);

    expect(ar).toEqual(revArr);
  });

});
