# Multi Bracket Validation


## Challenge
On your main file, create a function called multiBracketValidation(input). Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

* Round Brackets : ()
* Square Brackets : []
* Curly Brackets : {}

## Approach & Efficiency

* Approach implemented in incertShift function is efficient as it only reqires one cycle and incert and shift given array in place in two steps:
    1. Adding new element to the end of the array via .push js funciton
    2. Starting from the last element of the array function iterates swapping elements of the array in place until it reaches given index (in this case (arr.length)/2 works for both kind of array - with even & odd number of values). 
* There's helper funciton swap implemented in spirit of functional programming to make main function cleaner.
* Similar approch used in removeShiftArray function (reverced incertShift) - in this case I've implemented is / else statment to accomodate arrays with odd & even numbers of values. 

## Solution

![solution for insertShiftArray](/assets/multi-bracket-validation.jpg)
