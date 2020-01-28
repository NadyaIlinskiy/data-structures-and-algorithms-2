'use strict';

const leftJoin = (h1, h2) => {
  let leftKeys = h1.keys();
  let res = [];
  for(let i=0; i<leftKeys.length; i++){
    let k = leftKeys[i];
    let r = [k, h1.get(k), h2.get(k)];
    res.push(r);
  }
  return res;
};

module.exports = leftJoin;
