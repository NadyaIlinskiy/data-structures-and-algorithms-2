'use strict';

const repeatedWord = (string) => {
  
    if ((typeof string) !== 'string')
    {
        return '';
    }
    let repeated = /(\b\w+\b)(?=.*\b\1\b)/gi;
    let all = string.match(repeated);
    if (!all){
        return '';
    }else {
    return all[0];
    }
}

const repeatedWord2 = (string) => {
    if ((typeof string) !== 'string') {
        return '';
    }
    let words = string.split(" ");
  
    let wMap = {};
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (!wMap[word]) {
            wMap[word] = 1;
        } else {
            wMap[word] += 1;
        }
    }

    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (wMap[word] > 1) {
            return  word; 
        }
    
    }
}


module.exports = { repeatedWord, repeatedWord2};


// O(n)
