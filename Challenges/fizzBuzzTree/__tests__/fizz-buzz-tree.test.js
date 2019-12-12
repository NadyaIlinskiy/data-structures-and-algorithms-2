'use strict';

// Require the module we're testing
const FBT = require('../fizz-buzz-tree.js');
const Tree = require('../../../Data-Structures/tree/tree.js');
const BSTree = Tree.BSTree;

// Incorrect parameter
// Tree with only one Node
// Tree with root and only one left child
// Tree with no values divisible by 3 or 5
// Tree with values divisible by 3, by 5 and by both 3 and 5

describe('fizz buzz tree works as designed', () => {
  it('returnes correct result for Tree with values divisible by 3, by 5 and by both 3 and 5', () => {
    let bst = new BSTree();
    bst.add(4);
    bst.add(3);
    bst.add(5);  
    bst.add(15); 
    bst.add(7); 
    bst.add(0); 
    bst.add(9); 
    bst = FBT.FizzBuzzTree(bst);
    let expected = ['FizzBuzz', 'Fizz', 4, 'Buzz', 7, 'Fizz', 'FizzBuzz'];
    let result = bst.inOrder();
    expect(result).toEqual(expected);  
  });
  it('returnes correct error if pass incorrect parameter', () => {
    let result = FBT.FizzBuzzTree(-1);
    expect(result).toBeFalsy();
  });
  it('returnes correct result for Tree with only one Node', () => {
    let bst = new BSTree();
    bst.add(0); 
    bst = FBT.FizzBuzzTree(bst);
    let expected = ['FizzBuzz'];
    let result = bst.inOrder();
    expect(result).toEqual(expected);  
  });
  it('returnes correct result for Tree with only one left child', () => {
    let bst = new BSTree();
    bst.add(4);
    bst.add(0); 
    bst = FBT.FizzBuzzTree(bst);
    let expected = ['FizzBuzz', 4];
    let result = bst.inOrder();
    expect(result).toEqual(expected);  
  });
});
