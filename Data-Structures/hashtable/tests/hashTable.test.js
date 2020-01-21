'use strict';

// Require the module we're testing
const HashMap = require('../hashTable');

describe('Hashtable function performs hash, add, get, contains functions', () => {
  let hm = new HashMap();

  it('Adding a key/value to your hashtable results in the value being in the data structure ', () => {
    hm.add('bat', 'flying animal');
    let expected = hm.contains('bat');
    expect(expected).toBeTruthy();
  });

  it('retrieving based on a key returns the value stored', () => {
    let result = hm.get('bat');
    let expected = { key: 'bat', value: 'flying animal' };
    expect(result).toEqual(expected);
  });
  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    let result = hm.get('cosmos'); 
    expect(result).toBeFalsy();
  });



});

