
'use strict';

class HashTable {
  constructor() {
    this.table = new Array(200);
  }

  keys(){
    let kk = []
    this.table.forEach(e => {
      if (e){
        e.forEach(k => {
          kk.push(k)
        })
      }
    })
    return kk
  }

  hash(string) {
    const H = 37;
    let total = 0;

    for (var i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total %= this.table.length;
    // if (total < 1) {
    //   this.table.length - 1;
    // }
    return parseInt(total);
  }

  add(key, value) {
    let ind = this.hash(key);
    if (this.table[ind]){
      this.table[ind][key] = value;
    } else{
      this.table[ind] = { key: value };
    }
  }

  get(key) {
    let ind = this.hash(key);
    let value = this.table[ind][key];
    return value;
  }

  contains(key) {
    let ind = this.hash(key);
    return this.table[ind] !== null && this.table[ind][key] !== null
    // if (this.table[ind]) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

}

module.exports = HashTable;
