'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const printNodeSeq = (node) => {
  if (node == null){
    return '';
  }else{
    let arr = [];
    for (let iter = node; iter !=null; iter = iter.next){
      arr.push(iter.value);
    }
    return arr.toString();
  }
};

class Stack {
  constructor(){
    this.top = null;
  }
  push (val){
    if(this.top == null){
      this.top = new Node(val);
    } else{
      let newTop = new Node(val);
      newTop.next = this.top;
      this.top = newTop;
    }
  }

  pop(){
    if(!this.top){
      return null;
    }else {
      let exTopVal = this.top.value;
      this.top = this.top.next;
      return exTopVal; 
    }
  }
  peek(){
    if(!this.top){
      return null;
    }else {
      return this.top.value;
    }
  }
  
  print(){
    return printNodeSeq (this.top);
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(val){
    if(!this.front){
      this.front = new Node(val);
      this.rear = this.front;
    }else{
      this.rear.next = new Node (val);
      this.rear = this.rear.next;
    }
  }
  peek(){
    if(!this.front){
      return null;
    }else {
      return this.front.value;
    }
  }
  dequeue(){
    if(!this.front){
      return null;
    }else {
      let exFrontValue = this.front.value;
      this.front = this.front.next;
      return exFrontValue;
    }
  }
  print(){
    return printNodeSeq (this.front);
  }

}

module.exports = Stack;