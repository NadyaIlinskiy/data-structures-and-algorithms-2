'use strict';

const Tree = require('../../Data-Structures/tree/tree.js');
const BreadthFirst = require('../breadth-first/breadth-first.js');
const BinaryTree = Tree.BinaryTree;

class findMaximumBinaryTree extends BinaryTree{
  findMaximum(tree){
    let treeValues = BreadthFirst(tree);  
    return Math.max(...treeValues); 
  }
}
