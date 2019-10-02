# Shift an Array
Shift an Array with Java Script

## Challenge
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency

* Approach implemented in incertShift function is efficient as it only reqires one cycle and incert and shift given array in place in two steps:
    1. Adding new element to the end of the array via .push js funciton
    2. Starting from the last element of the array function iterates swapping elements of the array in place until it reaches given index (in this case (arr.length)/2). 
* There's helper funciton swap implemented in spirit of functional programming to make mane function cleaner.

## Solution

![solution](/assets/array-shift.jpg)

