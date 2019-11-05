# Reverse an Array
Reverse an Array with Java Script

## Challenge
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Approach & Efficiency
* First approach implemented in a fucntion aReverseViaNewArr is to create new Array and push elements to it from the original array starting from the last one. Not efficient as it creates new array and uses extra space. Also somewhat contredicts with requiremets to not use any built-in methods (aReverseViaNewArr uses push method).
* Approach implemented in aReverseInOneCycle function is more efficient as it reverce given array in place. Starting in same time from the first element and last element of the array function iterates swapping elements of the array in place. Cycle ends when both iteraters reach middle of the array.

## Solution

![solution](/assets/array-reverse.jpg)

