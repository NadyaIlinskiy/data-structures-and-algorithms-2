'use strict';

const LinkedList = require('./linked-list.js');



const mergeLists = (list1, list2) => {
  if (!list1){
    return list2;
  }
  if (!list2){
    return list1;
  }
  let iter1 = list1.head;
  let iter2 = list2.head;
  let flag = true;
  let glist = new LinkedList();

  while(!!iter1 && !!iter2){
    if(flag){
      glist.append(iter1.data);
      iter1 = iter1.next;
    }else{
      glist.append(iter2.data);
      iter2 = iter2.next;
    }
    flag = !flag;
  }
  let iter = iter1 ? iter1 : iter2;
  while(iter){
    glist.append(iter.data);
    iter = iter.next;
  }
  return glist.head;
};

module.exports = mergeLists;