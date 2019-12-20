'use strict';

module.exports = exports = {};

exports.insertionSort = (arr) => {
    if (!Array.isArray(arr)){
        return 'input is not array'
    }
    for(let i = 0; i < arr.length; i++){
        if (typeof arr[i] != 'number'){
            return 'input array values are not numeric'
        }
    }
    if(arr.length < 1){
        return 'array is empty'
    }
    let resArr = arr;
    for (let i = 0; i < resArr.length; i++) {
       let j = i;
        while (j > 0 && resArr[j - 1] > resArr[j]) {
            swap(resArr, j, j - 1);
            j = j - 1;
        }
    }
    return resArr;
};

const swap = (arr, a, b) => {
    let x = arr[a];
    arr[a] = arr[b];
    arr[b] = x;
    return arr;
};