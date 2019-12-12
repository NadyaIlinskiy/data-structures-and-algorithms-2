# Fifo Animal Shelter 
 build a Queue that represents an animal shelter

## Challenge
* Create a `Dog` and `Cat` class. These classes should share the following properties:
    * `name:` a string representing the name of this animal
    * `print()`: a function that prints
        * `${name}` is a good dog! if this is a Dog object
        * `${name}` is a sweet cat! if this is a Cat object
* Create a Queue class called `AnimalShelter` which holds only `Dogs` and `Cats`
    * Add a function `enqueue(animal)` which adds the specified `Dog` or `Cat` object into the shelter
    * Add a function `dequeue(pref)` which dequeues either the first `Dog` or the first `Cat` object in the queue, depending on what pref is (pref may be a string that is either empty, `'cat'` or `'dog'`)
        * If `pref` is an empty string, dequeue the first animal in the queue, regardless of if it’s a Dog or Cat
        * After you dequeue, call the print function on the dequeued object

## Approach & Efficiency
Implemented per requirments 
* `enqueue(animal)`  - O(1)
* `dequeue(pref)` - O(n)


## Solution

![approach to implementation of Animal Shelter and solution for decueue method](/assets/shelter.jpg)
