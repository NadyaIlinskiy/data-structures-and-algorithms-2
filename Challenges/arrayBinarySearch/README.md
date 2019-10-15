# Array binary search
Array binary search with Java Script

[Travis link ](https://travis-ci.com/NadyaIlinskiy/data-structures-and-algorithms-2 )
(To verify there's no linter errors).


## Authors
James Dunn, Nadya Ilinskaya and Morgan Tatum Shaw 

## Challenge
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
* Approach implemented in aBinarySearch function is very efficient: on ervery step it deviding array in half:
    1. Find middle of the array 
    2. Check if search value is equal, bigger or less then middle 
    3. Return midIndex if it's equal to Search value
    4. Find new start, end and middle if it bigger or less then middle (move right or left from the middle accordingly) 
    5. Repeat step ii


## Solution

![solution for binarySearch](/assets/array-binary-search.jpg)
