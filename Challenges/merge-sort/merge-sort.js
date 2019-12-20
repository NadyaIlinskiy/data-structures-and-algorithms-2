'use strict';

const mergeSort = (arr) => {
  if (!Array.isArray(arr)) {
    return 'input is not array';
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != 'number') {
      return 'input array values are not numeric';
    }
  }
  if (arr.length < 1) {
    return 'array is empty';
  }
  let resArr = arr;
  mergeSortRecur(resArr, 0, arr.length - 1);
  return resArr;
};
const mergeSortRecur = (arr, i, j) => {
  if (i + 1 === j) {
    if (arr[i] > arr[j]) {
      swap(arr, i, j);
    }
  } else if (i < j - 1) {
    let m = Math.floor((i + j) / 2);
    mergeSortRecur(arr, i, m);
    mergeSortRecur(arr, m + 1, j);
    merge(arr, i, m, j);
  }
};

const merge = (arr, i, m, j) => {
  let a = i;
  let b = m + 1;
  while (a < b && b <= j) {
    if (arr[a] <= arr[b]) {
      a += 1;
    } else {
      for (let c = a; c < b; c++) {
        swap(arr, c, b);
      }
      a += 1;
      b += 1;
    }
  }
};

const swap = (arr, a, b) => {
  let x = arr[a];
  arr[a] = arr[b];
  arr[b] = x;
  return arr;
};

module.exports = { mergeSort };