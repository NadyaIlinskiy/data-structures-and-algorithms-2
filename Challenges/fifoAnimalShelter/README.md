# Shift an Array
Shift an Array with Java Script

## Challenge
* Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
* Write a second function that removes an element from the middle index and shifts other elements in the array to fill the new gap.

## Approach & Efficiency

* Approach implemented in incertShift function is efficient as it only reqires one cycle and incert and shift given array in place in two steps:
    1. Adding new element to the end of the array via .push js funciton
    2. Starting from the last element of the array function iterates swapping elements of the array in place until it reaches given index (in this case (arr.length)/2 works for both kind of array - with even & odd number of values). 
* There's helper funciton swap implemented in spirit of functional programming to make main function cleaner.
* Similar approch used in removeShiftArray function (reverced incertShift) - in this case I've implemented is / else statment to accomodate arrays with odd & even numbers of values. 

## Solution

![solution for insertShiftArray](/assets/shift-array.jpg)
