'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  //root >> left >> right
  preOrder(arr){
    arr.push(this.value);
    if(this.left){
      this.left.preOrder(arr);
    }
    if(this.right){
      this.right.preOrder(arr);
    }
  }
  //left >> root >> right
  inOrder(arr){ 
    if(this.left){
      this.left.inOrder(arr);
    }
    arr.push(this.value);
    if(this.right){
      this.right.inOrder(arr);
    }
  }
  //left >> right >> root
  postOrder(arr){
    if(this.left){
      this.left.postOrder(arr);
    }
    if(this.right){
      this.right.postOrder(arr);
    }
    arr.push(this.value);
  }
 
  add(value){
    if(value < this.value){
      if (this.left){
        this.left.add(value);
      }else{
        this.left = new Node(value);
      }
    } else if (value > this.value){
      if (this.right){
        this.right.add(value);
      }else{
        this.right = new Node(value);
      }
    }
  } 
  contains(value){
    if(value === this.value){
      return true;
    }
    if(this.value < value && !!this.left){
      return this.left.contains(value);
    }
    if(this.value > value && !!this.right){
      return this.right.contains(value);
    }
    return false;
  } 
}

class BinaryTree {
  constructor(){
    this.root = null;
  }
  //root >> left >> right
  preOrder(){
    let arr = [];
    if(this.root){
      this.root.preOrder(arr);
    }
    return arr;
  }
  //left >> root >> right
  inOrder(){ 
    let arr = [];
    if(this.root){
      this.root.inOrder(arr);
    }
    return arr;
  }
  //left >> right >> root
  postOrder(){
    let arr = [];
    if(this.root){
      this.root.postOrder(arr);
    }
    return arr;
  }
}
class BinarySearchTree extends BinaryTree{
  add(value){
    if(this.root){
      this.root.add(value);
    } else{
      this.root = new Node(value);
    }
  }
  contains(value){
    if (this.root){
      return this.root.contains(value);
    } 
    return false; 
  }
}
module.exports = {
  BSTree: BinarySearchTree,
  Node: Node
}
