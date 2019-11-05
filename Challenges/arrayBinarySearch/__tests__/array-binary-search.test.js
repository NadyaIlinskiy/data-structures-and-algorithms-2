'use strict';

// Require the module we're testing
const Bis = require('../array-binary-search.js');

describe('Verify binary search', () => {
  it('Verify successful search: value founs in the array', () => {
    let arr = [4,8,15,16,23,42];
    let val = 15;
    let res = 2;
    let ar = Bis.aBinarySearch(arr, val);

    expect(ar).toEqual(res);
  });

  it('Verify unsuccessful search: value is NOT founs in the array', () => {
    let arr = [11,22,33,44,55,66,77];
    let val = 90;
    let res = -1;
    let ar = Bis.aBinarySearch(arr, val);

    expect(ar).toEqual(res);
  });

});