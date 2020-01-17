'use strict';

const swap = (arr, i, j) => {
  let  t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};
const qsort_recur = (arr, start, end) => {
  if (start >= 0 && end < arr.length && start < end) {
    let x = arr[Math.floor((start + end) / 2)];
    let i = start;
    let j = end;
    let k = -1;
    while (i < arr.length && j >= 0 && i < j) {
      while (i < arr.length && arr[i] <= x) {
        if (arr[i] == x) {
          if (k == -1) {
            k = i;
          }
        } else if (k != -1) {
          swap(arr, k, i);
          k += 1;
        }
        i += 1;
      }
      while (j >= 0 && arr[j] > x) {
        j -= 1;
      }
      if (i < j) {
        swap(arr, i, j);
      }
    }
    qsort_recur(arr, start, k - 1);
    qsort_recur(arr, i, end);
  }
};

const quickSort = (arr) => {
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
  let result = arr;
  qsort_recur(result, 0, result.length - 1);

  return result;
};


module.exports = { quickSort };


