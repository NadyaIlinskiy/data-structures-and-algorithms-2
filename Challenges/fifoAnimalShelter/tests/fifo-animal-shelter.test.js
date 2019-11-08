'use strict';

// Require the module we're testing
const Rev = require('../fifo-animal-shelter.js');

describe('Verify incertShiftArray for array with even and odd number of values', () => {
    it('Verify for array with even number of values', () => {
        let arr = [2, 4, 6, 8];
        let val = 5;
        let revArr = [2, 4, 5, 6, 8];
        let ar = Rev.insertShiftArray(arr, val);

        expect(ar).toEqual(revArr);
    });
});