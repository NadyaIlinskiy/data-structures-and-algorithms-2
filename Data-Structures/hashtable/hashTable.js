
'use strict';

class HashTable {
  constructor() {
    this.table = new Array(200);
  }

  keys(){
    let all_keys = [];
    for(let j=0; j<this.table.length; j++){
      let arr = this.table[j];
      if(arr){
        for(let i=0; i<arr.length; i++){
          all_keys.push(arr[i][0]);
        }
      }
    }
    return all_keys;
  }

  get_key_value(){
    let kv = [];
    for(let j=0; j<this.table.length; j++){
      let arr = this.table[j];
      if(arr){
        for(let i=0; i<arr.length; i++){
          kv.push(arr[i]);
        }
      }
    }
    return kv;
  }

  hash(string) {
    const H = 37;
    let total = 0;

    for (var i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total %= this.table.length;
    return parseInt(total);
  }

  add(key, value) {
    let ind = this.hash(key);
    let arr = this.table[ind];
    if (!arr) {
      this.table[ind] = [[key, value]];
    } else {
      let flag = false;
      for(let i=0; i<arr.length; i++){
        flag = arr[i][0] === key;
        if(flag){
          arr[i][1] = value;
          break;
        }
      }
      if(!flag){
        arr.push([key, value]);
      }
    }
    // if (this.table[ind]){
    //   this.table[ind][key] = value;
    // } else{
    //   this.table[ind] = { key: value };
    // }
  }

  get(key) {
    let ind = this.hash(key);
    let arr = this.table[ind];
    if(arr){
      for(let i=0; i<arr.length; i++){
        if (arr[i][0] === key){
          return arr[i][1];
        }
      }
    }
    return null;
    // let value = this.table[ind][key];
    // return value;
  }

  contains(key) {
    let ind = this.hash(key);
    let arr = this.table[ind];
    if(arr){
      for(let i=0; i<arr.length; i++){
        if (arr[i][0] === key){
          return true;
        }
      }
    }
    return false;
    //return this.table[ind] !== null && this.table[ind][key] !== null
  }

}

module.exports = HashTable;
