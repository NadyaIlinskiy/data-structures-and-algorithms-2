# Trees
Implement a Tree Data Structure

## Challenge
Create a `Node` class that has properties for the `value` stored in the node, the `left` child `Node`, and the `right` child `Node`.

### Binary Tree
Create a `BinaryTree` class with the following defined properties and methods:

* A `root` property that stores a Node representing the start of the tree
* A `preOrder` method that traverses the tree using the pattern root >> left >> right and returns an array of the traversed values
* An `inOrder` method that traverses the tree using the pattern left >> root >> right and returns an array of the traversed values
* A `postOrder` method that traverses the tree using the pattern left >> right >> root and returns an array of the traversed values

### Binary Search Tree
Create a `BinarySearchTree` class, extended from your `BinaryTree class`, with the following defined properties and methods:

* An `add` method that accepts a value and adds a new Node with that value in the correct location in the binary search tree.
* A method named `contains` that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.


## Approach & Efficiency
There're three methods implemented in the class LinkedList:
#### Binary Tree
* preOrder(); 
O(n)
* inOrder();
O(n)
* postOrder();
O(n)


#### Binary Search Tree
* add()
O(1)
* contains()
O(n)

## Solution
Solution impemented per requirments. 


