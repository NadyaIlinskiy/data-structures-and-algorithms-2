'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const printNodeSeq = (node) => {
  if (node == null) {
    return '';
  } else {
    let arr = [];
    for (let iter = node; iter != null; iter = iter.next) {
      arr.push(iter.value);
    }
    return arr.toString();
  }
};

class LinkedList {
  constructor(){
    this.head = null;
  }
  insert (val){
    if(this.head == null){
      this.head = new Node(data);
    } else{
      let newHead = new Node(data);
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
  append (val){
    if(this.head == null){
      this.head = new Node(val);
    } else{
      let iter = this.head;
      for ( ; iter.next != null; iter = iter.next);
      iter.next = new Node(val);
    }
    return this;
  }
  insertBefore(val, newVal){
    if(this.head == null){
      console.log('Error');
    } else{
      let iter = this.head;
      for ( ; iter.next != null&&iter.next.data!=val; iter = iter.next);
      if(iter.next==null){
        console.log('Error');
      }else{
        let newNode = new Node(newVal);
        newNode.next = iter.next;
        iter.next = newNode;
      }     
    }
  }
  insertAfter(val, newVal){
    if(this.head == null){
      console.log('Error');
    } else{
      let iter = this.head;
      for ( ; iter != null&&iter.data!=val; iter = iter.next);
      if(iter==null){
        console.log('Error');
      }else{
        let newNode = new Node(newVal);
        newNode.next = iter.next;
        iter.next = newNode;
      }     
    }
  }
  kthFromEnd(k){
    if(k<=0||!this.head){
      console.log('k is negative or LL is empty');
      return null;
    }
    let iter1 = this.head;
    let stepsCount = 0;
    while(stepsCount < k && !!iter1){
      iter1 = iter1.next;
      stepsCount+=1;
    }
    if(stepsCount < k){
      console.log('k greater then LL length');
      return null;   
    }
    let iter2 = this.head; //starting second iterator
    while(iter1){
      iter1 = iter1.next;
      iter2 = iter2.next;
    }
    return iter2.data;
  }
  print() {
    return printNodeSeq(this.head);
  }
}



module.exports = LinkedList;
