'use strict';

// Require the module we're testing
const Tree = require('../tree.js');
const BSTree = Tree.BSTree;

describe('Performs Tree manipulations', () => {
  
  it('Can successfully instantiate an empty tree ', () => {
    const bst = new BSTree();
    let result = bst.root;
    expect(result).toBeFalsy(); 
  });
  it('Can successfully instantiate a tree with a single root node ', () => {
    const bst = new BSTree();
    bst.add(4);
    let result = bst.root.value;
    expect(result).toEqual(4); 
  });

  it('Can successfully add a left child and right child to a single root node on a Binary Search Tree ', () => {
    const bst = new BSTree();
    bst.add(4);
    bst.add(3);
    bst.add(5);  
    let root = bst.root.value;
    let left = bst.root.left.value;
    let right =  bst.root.right.value;
    expect(root).toEqual(4); 
    expect(left).toEqual(3); 
    expect(right).toEqual(5); 
  });

  // creating tree structure for next 3 tests
  const bst = new BSTree();  
  let arr = [4, 2, 6, 3, 1, 5];
  for (let i = 0; i < arr.length; i++){
    bst.add(arr[i]);
  }

  it('Can successfully return a collection from a pre-order traversal ', () => {
    let expected = [4,2,1,3,6,5];
    let result = bst.preOrder();
    expect(result).toEqual(expected); 
  });
  it('Can successfully return a collection from an in-order traversal ', () => {
    let expected = [1,2,3,4,5,6];
    let result = bst.inOrder();
    expect(result).toEqual(expected); 
  });
  it('Can successfully return a collection from a post-order traversal ', () => {
    let expected = [1,3,2,5,6,4];
    let result = bst.postOrder();
    expect(result).toEqual(expected); 
  });

});