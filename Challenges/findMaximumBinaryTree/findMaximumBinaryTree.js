'use strict';

const Tree = require('../../Data-Structures/tree/tree.js');
const BreadthFirst = require('../breadth-first/breadth-first.js');
const BinaryTree = Tree.BinaryTree;

class findMaximumBinaryTree extends BinaryTree{
  findMaximum(tree){
    let treeValues = BreadthFirst(tree);  
    // return Math.max(...treeValues); 
    let max = treeValues[0];
    for (let i = 1; i < treeValues.length; i++) {
      if (treeValues[i] > max){
        max = treeValues[i];
      }
    }
    return max;

  }
}

module.exports = findMaximumBinaryTree;