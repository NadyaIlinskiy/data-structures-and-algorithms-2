# findMaximumBinaryTree
Implement findMaximumBinaryTree class 

[PR LINK](https://github.com/NadyaIlinskiy/data-structures-and-algorithms-2/pull/20)

## Challenge
* Write a class function called find-maximum-value. It returns max value stored in the Binary Tree.
(assumption is that all the values are numeric).

## Approach & Efficiency
 
 `findMaximumBinaryTree` class extends BinaryTree class and utilizing utilizing 
 breadth first traversal method implemented earlier
Efficiency - O(n) as it's going though every Node

## Solution
Solution utilizing previously implemented functionality ->  breadth-first method, which returns an array of values. 
FindMaximum method on findMaximumBinaryTree class just grabbing max value from an array, which is trivial task with or without utilizing build-in functions.
Algorithm on pic below shows breadth-first solution.
![solution](/assets/find-maximum-value.jpg)
