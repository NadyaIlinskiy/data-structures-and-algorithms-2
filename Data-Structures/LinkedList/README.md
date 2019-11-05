# Linked Lists
Implement a Singly Linked List

## Challenge
* Create a class named Node. This class should contain:
* * A variable to hold data (i.e. this.data)
* * A variable to hold the next Node object (i.e. this.next)
* Create a class named LinkedList. This class should contain:
* * A variable named head which holds the Node object that starts the list
* * A constructor that instantiates head as an empty linked list
* * A function called insert which takes in a value. This function will then create a new Node object, sets the object’s data property equal to the value. The function then appends this new Node object to the beginning of the linked list (i.e. it sets a new head)
* * A function called includes which takes in a value and returns a boolean if that value exists in the linked list
* * A function called toString whcih takes in no arguments and returns a string representing all the values in the linked list
* * Implement good error checking throughout your code. C

## Approach & Efficiency
There're three methods implemented in the class LinkedList:

* incert(); 
O(1)
* includes();
O(n)
* toString();
O(n)

## Solution
Solution impemented per requirments. 

![solution](/assets/linked-list.jpg)

