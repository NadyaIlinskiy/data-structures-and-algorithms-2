'use strict';

// Require the module we're testing
const Tree = require('../../Data-Structures/tree');
const BSTree = Tree.BSTree;

// Binary trees with no shared values
// Identical binary trees(all values shared)
// Binary trees of vastly different sizes(for example, one has just a single node, another has 20 nodes)
// Incorrect parameters

describe('Finds tree intersection', () => {
  
  it('Happy path ', () => {
    const bst = new BSTree();
    let result = bst.root;
    expect(result).toBeFalsy(); 
  });
  it('Binary trees with no shared values', () => {
    const bst = new BSTree();
    bst.add(4);
    let result = bst.root.value;
    expect(result).toEqual(4); 
  });

  it('Identical binary trees(all values shared) ', () => {
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

  it('Binary trees of vastly different sizes(for example, one has just a single node, another has 20 nodes) ', () => {
    let expected = [4,2,1,3,6,5];
    let result = bst.preOrder();
    expect(result).toEqual(expected); 
  });

});