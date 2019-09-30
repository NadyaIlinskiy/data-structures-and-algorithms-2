'use strict'
module.exports = exports = {};

/***
 * @param arr gets array
 * @returns reversed array
 */
exports.aReverseViaNewArr = (arr) => {
    let resultArr = [];
    for (let i = arr.length-1; i >= 0; i--){
        resultArr.push(arr[i]);
    };
    return resultArr;
}

/***
 * @param arr gets array
 * @returns reversed array
 */

exports.aReverseInOneCycle = (arr) => {
    for (let i=0, j=arr.length-1; i <= arr.length/2, j >= arr.length/2; i++, j--){
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
};
