'use strict';

module.exports = exports = {};

/***
 * @param arr gets array
 * @param num gets value
 * @returns array with vakue added to the middle index
 */
exports.insertShiftArray = (arr, val) => {
  // arr.push(val);
  arr[arr.length] = val;

  for (let i = arr.length-1; i > arr.length/2; i--){
    swap(arr, i, i-1);
  }
  return arr;
};

const swap = (arr, a, b) => {
  let x = arr[a];
  arr[a] = arr[b];
  arr[b] = x;
  return arr;
};

exports.removeShiftArray = (arr) => {
  //even
  if (arr.length%2===0){
    for (let i = (arr.length)/2; i < arr.length-1; i++){
      swap(arr, i, i+1);
    }
  } else {
  //odd
    for (let i = (arr.length-1)/2; i < arr.length-1; i++){
      swap(arr, i, i+1);
    }
  }
  //arr.pop();
  arr.length = arr.length-1;
  return arr;
};
