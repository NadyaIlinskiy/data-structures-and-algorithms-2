// Tree with all values the same(should still return max value)
// Tree with negative and positive values
// Tree with two instances of the max number(should still return max value)
// Example tree shown above

'use strict';

const Tree = require('../../../Data-Structures/tree/tree.js');
const Node = Tree.Node;
const BSTree = Tree.BSTree;
const findMax = require('../findMaximumBinaryTree.js');

describe('Finds maximum value on a BinaryTree', () => {

  it('Finds maximum value on a Tree with all values the same ', () => {
    const bst = new BSTree();
    bst.add(2);
    bst.add(2);
    bst.add(2);
    bst.add(2);
    bst.add(2);
    bst.add(2);

    let res = new findMax();
    let result = res.findMaximum(bst);
    expect(result).toEqual(2);
  });

  it('Finds maximum value on a Tree with negative and positive values ', () => {
    const bst = new BSTree();
    bst.add(2);
    bst.add(-2);
    bst.add(0);
    bst.add(100);
    bst.add(-100);
    bst.add(12);

    let res = new findMax();
    let result = res.findMaximum(bst);
    expect(result).toEqual(100);
  });

  it('Finds maximum value on a Tree with two instances of the max number ', () => {
    const bst = new BSTree();
    bst.add(2);
    bst.add(-2);
    bst.add(0);
    bst.add(100);
    bst.add(100);
    bst.add(12);

    let res = new findMax();
    let result = res.findMaximum(bst);
    expect(result).toEqual(100);
  });

  it('Finds maximum value on a Tree from Canvas Example ', () => {
    const bst = new BSTree();
    bst.root = new Node(2);
    bst.root.left = new Node(7);
    bst.root.left.left = new Node(2);
    bst.root.left.right = new Node(6);
    bst.root.left.right.left = new Node(5);
    bst.root.left.right.right = new Node(11);
    bst.root.right = new Node(5);
    bst.root.right.right = new Node(9);
    bst.root.right.right.left = new Node(4);

    let res = new findMax();
    let result = res.findMaximum(bst);
    expect(result).toEqual(11);
  });
  
});    