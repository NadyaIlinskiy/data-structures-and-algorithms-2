# Queue with Stacks
implement a Queue using two Stacks

## Challenge
Create a brand new ```PseudoQueue``` class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize two ```Stack``` objects. Ensure that you create your class with the following methods:

* ```enqueue(value)``` which inserts value into the PseudoQueue, using a last-in, last-out approach.
* ```dequeue()``` which extracts a value from the PseudoQueue, using a first-in, first-out approach.
The ```Stack``` instances have only ```push```, ```pop```, and ```peek``` methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Approach & Efficiency
In the worst case scenario we're shifting everything from one stack to another in a while loop => hense our efficiency is O(n):

* enqueue(value); 
O(n)
* dequeue();
O(n)
* peek();
O(n)
* print()
O(n)

## Solution
Solution impemented per requirments. 


