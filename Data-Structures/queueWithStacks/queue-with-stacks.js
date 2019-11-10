'use strict';
const {Stack, Queue} = require('../stacksAndQueues/stacks-and-queues.js');

class  PseudoQueue{
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }
  enqueue(value){
    shiftStack(this.outStack, this.inStack);
    this.inStack.push(value);
  }
  dequeue(){
    shiftStack(this.inStack, this.outStack);
    return this.outStack.pop();
  }
  peek(){
    shiftStack(this.inStack, this.outStack);
    return this.outStack.peek();
  }
  print(){
    shiftStack(this.outStack, this.inStack);
    return this.inStack.print();
  }
}

const shiftStack = (stackA, stackB) => {
  let val = stackA.pop();
  while(val!=null){
    stackB.push(val);
    val = stackA.pop();
  }
};

module.exports = PseudoQueue;