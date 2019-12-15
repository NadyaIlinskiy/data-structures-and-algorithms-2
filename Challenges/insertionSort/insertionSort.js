'use strict';

module.exports = exports = {};

exports.iSort = (arr) => {

    let sortedArr = arr.sort();
    return sortedArr;
};

const swap = (arr, a, b) => {
    let x = arr[a];
    arr[a] = arr[b];
    arr[b] = x;
    return arr;
};