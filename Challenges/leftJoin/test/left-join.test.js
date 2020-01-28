'use strict';
const leftJoin = require('../left-join');
const HashMap = require('../../../Data-Structures/hashtable/hashTable');

describe('left-join function works as expected', () => {

  it('Left-join happy path', () => {
    let hm1 = new HashMap();
    hm1.add('cat', 'Kristi');
    hm1.add('dog', 'Jim');
    hm1.add('spider', 'Jeff');

    let hm2 = new HashMap();
    hm2.add('cat', 'Mishka');
    hm2.add('dog', 'Belka');
    hm2.add('hog', 'Yogik');

    let result = leftJoin(hm1, hm2);

    let expected = [
      ['cat', 'Kristi', 'Mishka'],
      ['dog', 'Jim', 'Belka'],
      ['spider', 'Jeff', null],
    ];

    expect(result.length).toEqual(expected.length);

    // for (let i = 0; i < expected.length; i++) {
    //     let flag = false;
    //     for (let j = 0; j < result.length; j++) {
    //         flag = expected[i][0] === result[j][0] && expected[i][1] === result[j][1] && expected[i][2] === result[j][2];
    //         if (flag) {
    //             break;
    //         }
    //     }
    //     expect(flag).toBeTruthy();
    // }

  });

});