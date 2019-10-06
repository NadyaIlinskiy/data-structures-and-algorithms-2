'use strict';

module.exports = exports = {};

const test1 = [4,8,15,16,23,9, 15];
const input1 = 15;
const test2 = [11,22,33,44,55,66,77];
const input2 = 90;

function returnKey(arr,search) {
  //check if middle index matches key
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
 
  while (firstIndex < lastIndex) {
    let middle = Math.floor((firstIndex + lastIndex) / 2);
    if (arr[middle] === search) {
      return middle;
    }
    if (search < arr[middle]) {
    // if search is less, then firstIndex stays same
    // and lastIndex changes to middle minus 1
      lastIndex = middle-1;
      middle = Math.floor((firstIndex + lastIndex) / 2);
    // divide that by two, and make that new middle
    } else if (search > arr[middle]) {
      firstIndex = middle+1;
      middle = Math.floor((firstIndex + lastIndex) / 2);
    }
  }
  return -1;
}


console.log(returnKey(test2, 22));
console.log(returnKey(test2, 66));
console.log(returnKey(test2, 9));
console.log(returnKey(test1, 289));