'use strict';

const Tree  = require('../../../Data-Structures/tree/tree.js');
const BTree = Tree.BSTree;

// Require the module we're testing
const TI = require('../tree_intersection.js');

// Binary trees with no shared values
// Identical binary trees(all values shared)
// Binary trees of vastly different sizes(for example, one has just a single node, another has 20 nodes)
// Incorrect parameters

describe('Finds tree intersection', () => {
  
  it('Happy path ', () => {
    const bt1 = new BTree();
    bt1.add(4);
    bt1.add(3);
    bt1.add(5);  
    const bt2 = new BTree();
    bt2.add(4);
    bt2.add(6);
    bt2.add(7); 
    let result = TI.tree_intersection(bt1, bt2);
    expect(result).toEqual(['4']);  
  });

  it('Binary trees with no shared values', () => {
    const bt1 = new BTree();
    bt1.add(1);
    bt1.add(2);
    bt1.add(3);
    const bt2 = new BTree();
    bt2.add(4);
    bt2.add(6);
    bt2.add(7);
    let result = TI.tree_intersection(bt1, bt2);
    expect(result).toEqual([]); 
  });

  it('Identical binary trees(all values shared) ', () => {
    const bt1 = new BTree();
    bt1.add(1);
    bt1.add(2);
    bt1.add(3);
    const bt2 = new BTree();
    bt2.add(1);
    bt2.add(2);
    bt2.add(3);
    let result = TI.tree_intersection(bt1, bt2);
    expect(result).toEqual(["1","2","3"]); 
  });

});