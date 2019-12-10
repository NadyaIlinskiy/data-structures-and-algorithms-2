'use strict';

const Tree = require('../../../Data-Structures/tree/tree.js');
const Node = Tree.Node;
const BSTree = Tree.BSTree;
const BreadthFirst = require('../breadth-first.js');

describe('Performs Breadth First Search Tree manipulations', () => {

    it('Function works as expected ', () => {
        const bst = new BSTree();
        bst.add('A');
        bst.add('B');
        bst.add('C'); 
        bst.add('D');
        bst.add('E');
        bst.add('F'); 
      
        let result = BreadthFirst(bst);
        expect(result.join()).toEqual('A,B,C,D,E,F');
    });
    
    it('Function works with Incorrect parameter ', () => {
        let result = BreadthFirst('hello');
        expect(result).toEqual([]);
    });

    it('Function works tree with only one Node ', () => {
        const bst = new BSTree();
        bst.add(4);
        let result = BreadthFirst(bst);
        expect(result).toEqual([4]);
    });
    it('Function works tree with only left child ', () => {
        const bst = new BSTree();
        bst.add(4);
        bst.add(2);
        let result = BreadthFirst(bst);
        expect(result).toEqual([4,2]);
    });
    it('Function works tree with only right child ', () => {
        const bst = new BSTree();
        bst.add(4);
        bst.add(5);
        let result = BreadthFirst(bst);
        expect(result).toEqual([4,5]);
    });
    it('Function works as expected ', () => {
        const bst = new BSTree();
       bst.root = new Node('hello');
       bst.root.left = new Node ({});
       bst.root.right = new Node(4);
        let result = BreadthFirst(bst);
        expect(result).toEqual(['hello',{},4]);
    });
});    