'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  construcor(){
    this.head = null;
  }
  insert (val){
    if(this.head == null){
      this.head = new Node(val);
    } else{
      let newHead = new Node(val);
      newHead.next = this.head;
      this.head = newHead;
    }
  }
  includes(val){
    if (this.head == null){ // === returnes underfined. What's the right way to go?
      return false; 
    }else{
      for (let iter = this.head; iter !=null; iter = iter.next){
        if(iter.data === val){
          return true;
        }
      }
      return false;
    }
  }
  toString(){
    if (this.head == null){
      return 'List is Empty';
    }else{
      let arr = [];
      for (let iter = this.head; iter !=null; iter = iter.next){
        arr.push(iter.data);
      }
      return arr.toString();
    }
  }
}

module.exports = LinkedList;
