'use strict';

// Require the module we're testing
const { repeatedWord, repeatedWord2 }  = require('../repeated-word.js');

describe('Verify REGEX implementation of repeated word functionality', () => {
  it('Verify Happy path', () => {
    let string = 'Once upon a time, there was a brave princess who...';
    let expected = 'a';
    expect(repeatedWord(string)).toEqual(expected);
  });
  it('Verify String which contains only one word', () => {
    let string = 'hello';
    expect('').toEqual(repeatedWord(string));
  });
  it('Verify String where the repeated word happens immediately (‘hello hello’)', () => {
    let string = 'hello hello';
    let expected = 'hello';
    expect(expected).toEqual(repeatedWord(string));
  });
  it('Verify String where there are no repeated words', () => {
    let string = 'hello world';
    expect('').toEqual(repeatedWord(string));
  });
  it('Verify Incorrect parameter error handling', () => {
    let string = 123;
    expect('').toEqual(repeatedWord(string));
  });

});

describe('Verify dictionary implementation of repeated word functionality', () => {
  it('Verify Happy path', () => {
    let string = 'Once upon a time, there was a brave princess who...';
    let expected = 'a';
    expect(repeatedWord2(string)).toEqual(expected);
  });

  it('Verify String where the repeated word happens immediately (‘hello hello’)', () => {
    let string = 'hello hello';
    let expected = 'hello';
    expect(expected).toEqual(repeatedWord2(string));
  });
 
  it('Verify Incorrect parameter error handling', () => {
    let string = 123;
    expect('').toEqual(repeatedWord2(string));
  });

});