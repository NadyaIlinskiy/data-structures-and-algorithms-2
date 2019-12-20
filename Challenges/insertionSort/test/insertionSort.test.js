'use strict';

// Require the module we're testing
const iSort = require('../insertionSort.js');

describe('Verify insertionSort functionality', () => {
  it('Verify Sort array of length 1', () => {
    let arr = [1];
    let result = [1];

    expect(result).toEqual(iSort.insertionSort(arr));
  });
  it('Verify Sort array of length 2', () => {
    let arr = [1, 2];
    let result = [1, 2];

    expect(result).toEqual(iSort.insertionSort(arr));
  });
  it('Verify Sort array of length 10', () => {
    let arr = [9, 3, 5, 10, 2, 4, 1, 7, 6, 8 ] ;
    let result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(result).toEqual(iSort.insertionSort(arr));
  });

  it('Verify error handling for Not an array', () => {
    let notArr = 'hello world!';
    let result = 'input is not array';
    expect(result).toEqual(iSort.insertionSort(notArr));
        
  });
  it('Verify error handling for Array with non-numerical values', () => {
    let notNumArr = [1, 'hello world!'];
    let result = 'input array values are not numeric';

    expect(result).toEqual(iSort.insertionSort(notNumArr));
  });
  it('Verify error handling for Empty array', () => {
    let emptyArr = [];
    let result = 'array is empty';

    expect(result).toEqual(iSort.insertionSort(emptyArr));
  });

});