'use strict';

// Require the module we're testing
const Rev = require('../array-reverse.js');

describe('Reverse array via new array', () => {
  it('returnes reversed array - numbers', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    let revArr = [6, 5, 4, 3, 2, 1];
    let ar = Rev.aReverseViaNewArr(arr);

    expect(ar).toEqual(revArr);
  });

  it('returnes reversed array - negative numbers', () => {
    let arr = [89, 2354, 3546, 23, 10, -923, 823, -12];
    let revArr = [-12, 823, -923, 10, 23, 3546, 2354, 89];
    let ar = Rev.aReverseViaNewArr(arr);

    expect(ar).toEqual(revArr);
  });

  it('returnes reversed array - strings', () => {
    let arr = ['one', 'two', 'three'];
    let revArr = ['three', 'two', 'one'];
    let ar = Rev.aReverseViaNewArr(arr);

    expect(ar).toEqual(revArr);
  });
});

describe('Reverce array in one cycle', () => {
  it('returnes reversed array - numbers', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    let revArr = [6, 5, 4, 3, 2, 1];
    let ar = Rev.aReverseInOneCycle(arr);

    expect(ar).toEqual(revArr);
  });

  it('returnes reversed array - negative numbers', () => {
    let arr = [89, 2354, 3546, 23, 10, -923, 823, -12];
    let revArr = [-12, 823, -923, 10, 23, 3546, 2354, 89];
    let ar = Rev.aReverseInOneCycle(arr);

    expect(ar).toEqual(revArr);
  });

  it('returnes reversed array - strings', () => {
    let arr = ['one', 'two', 'three'];
    let revArr = ['three', 'two', 'one'];
    let ar = Rev.aReverseInOneCycle(arr);

    expect(ar).toEqual(revArr);
  });
});
