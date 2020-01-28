# Left Join

* Write a function that LEFT JOINs two hash tables into a single data structure
* Assume you know the hash function (use an existing one you’ve developed before)
* The first parameter is a hash table that stores an object containing the original key (a word) and the key’s value (a word that is a synonym)
* The second parameter is a hash table that stores an object containing the original key (a word), and a key’s value (a word that is an antonym)
* Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
* LEFT JOIN means all the values in the first “left” hash table are returned, and if values exist in the “right” hash table, they are appended to the result row. If no values exist in the “right” hashmap, then some flavor of NULL should be appended to the result row.
* The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic


* [Pull Request](https://github.com/NadyaIlinskiy/data-structures-and-algorithms-2/pull/27)
* [Travis-CI](https://travis-ci.com/NadyaIlinskiy/data-structures-and-algorithms-2)


## Approach & Efficiency
* O(log n) 

## Solution

![solution - 1](/assets/left-join.jpg)


