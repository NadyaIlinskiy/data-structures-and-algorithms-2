'use strict';

const toFizzBuzz = (val) => {
  if(+val%3===0&&+val%5===0){
    return 'FizzBuzz';
  }else if (+val%3===0){
    return 'Fizz';
  } else if(+val%5===0){
    return 'Buzz';
  }else {
    return val;
  }
};

const FizzBuzzTreeRec = (node)=> {
  node.value = toFizzBuzz(node.value);
  if(node.left){
    FizzBuzzTreeRec(node.left);
  }
  if(node.right){
    FizzBuzzTreeRec(node.right);
  }   
};

const FizzBuzzTree = (tree) => {
  if(tree.root){
    FizzBuzzTreeRec(tree.root);
    return tree;
  } 
};

module.exports = { FizzBuzzTree };