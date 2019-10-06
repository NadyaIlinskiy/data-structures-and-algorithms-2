'use strict';

module.exports = exports = {};

exports.aBinarySearch = (arr,search) => {
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
};