
'use strict';

class HashTable {
  constructor() {
    this.table = new Array(200);
  }

  hash(string) {
    const H = 37;
    let total = 0;

    for (var i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total %= this.table.length;
    if (total < 1) {
      this.table.length - 1;
    }
    return parseInt(total);
  }

  add(key, value) {
    let ind = this.hash(key);
    this.table[ind] = { key, value };
  }

  get(key) {
    let ind = this.hash(key);
    let value = this.table[ind];
    return value;
  }

  contains(key) {
    let ind = this.hash(key);
    if (this.table[ind]) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = HashTable;
