'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }
  print() {
    return `${this.name} is cute animal!`;
  }
}

class Cat extends Animal {
  print() {
    return `${this.name} is sweet cat!`;
  }
}
class Dog extends Animal {
  print() {
    return `${this.name} is good dog!`;
  }
}

class Node {
  constructor(animal) {
    this.animal = animal;
    this.next = null;
  }
}

class AnimalShelter {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(animal){
    if(!(animal instanceof Animal)){
      throw new Error('not an animal!');
    }
    if(!this.front){
      this.front = new Node(animal);
      this.rear = this.front;
    }else{
      this.rear.next = new Node (animal);
      this.rear = this.rear.next;
    }
  }
  dequeue(pref){
    if(!this.front){
      return null;
    }else if (isIt(this.front.animal, pref)){
      let exFrontAnimal = this.front.animal;
      this.front = this.front.next;
      return exFrontAnimal;
    }   
    else {
      let iter = this.front;
      while(iter.next && !isIt(iter.next.animal, pref)){
        iter = iter.next;
      } 
      if(!iter.next){
        return null;
      }
      let exFrontAnimal = iter.next.animal;
      iter.next = iter.next.next;
      if(!iter.next){
        this.rear = iter;
      }
      return exFrontAnimal;
    }
  }
}

const isIt = (instance, pref)=> {
  if (pref === ''){
    return true;
  }
  if(instance instanceof Dog){
    if(pref === 'dog'){
      return true;
    }
    if(pref === 'cat'){
      return false;
    }
  }
  if(instance instanceof Cat){
    if(pref === 'cat'){
      return true;
    }
    if(pref === 'dog'){
      return false;
    }
  }
  return false;
};

module.exports = { AnimalShelter, Cat, Dog, Animal };