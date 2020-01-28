'use strict';

// Require the module we're testing
const HashMap = require('../hashTable');

describe('Hashtable function performs hash, add, get', () => {
  let hm = new HashMap();

  it('Adding a key/value to your hashtable results in the value being in the data structure ', () => {
    hm.add('bat', 'flying animal');
    let expected = hm.contains('bat');
    expect(expected).toBeTruthy();
  });

  it('retrieving based on a key returns the value stored', () => {
    let result = hm.get('bat');
    let expected = 'flying animal';
    expect(result).toEqual(expected);
  });
  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    let result = hm.get('cosmos'); 
    expect(result).toBeFalsy();
  });

  it('Handle collision if keys are same', () => {
    hm.add('cat', 'pussy cat');
    hm.add('cat', 'black cat');
    let result = hm.get('cat');
    let expected = 'black cat';
    expect(result).toEqual(expected);
  });

  it('Get keys', () => {
    let hm2 = new HashMap();
    hm2.add('cat', 'Kristi');
    hm2.add('dog', 'Belka');
    hm2.add('hog', 'Yogik');

    let result = hm2.keys();
    let expected = ['hog','dog','cat'];

    expect(result.length).toEqual(expected.length);

    for(let i=0; i<expected.length; i++){
      let flag = false;
      for(let j=0; j<result.length; j++){
        flag = expected[i] === result[j];
        if(flag){
          break;
        }
      }
      expect(flag).toBeTruthy();
    }
  });
  
});

