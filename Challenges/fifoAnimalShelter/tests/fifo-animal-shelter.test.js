'use strict';

// Require the module we're testing
const shelter = require('../fifo-animal-shelter.js');

describe('Performs Queue manipulations', () => {
  const animalShelter = new shelter.AnimalShelter();
 
  it('Can successfully enqueue a Dog ', () => {
    animalShelter.enqueue(new shelter.Dog('Belka'));
    let result = animalShelter.front.animal.print();
    expect(result).toEqual('Belka is good dog!');
  });

  it('Can successfully enqueue a Cat ', () => {
    animalShelter.enqueue(new shelter.Cat('Mishka'));
    let result = animalShelter.rear.animal.print();
    expect(result).toEqual('Mishka is sweet cat!');
  });
  
  it('Error handling when you try to enqueue something that is neither a Dog nor a Cat ', () => {
    try{
      animalShelter.enqueue('sweet cat');
    } catch(err){
      expect(err).toEqual(new Error('not an animal!'));
    }
  });
  it('Can successfully dequeue a Dog ', () => {
    let adopted  = animalShelter.dequeue('dog');
    expect(adopted.print()).toEqual('Belka is good dog!');
  });
  it('Can successfully dequeue a Cat ', () => {
    let adopted  = animalShelter.dequeue('cat');
    expect(adopted.print()).toEqual('Mishka is sweet cat!');
  });
  it('Can successfully dequeue the front of the AnimalShelter queue when you pass no parameters to dequeue ', () => {
    animalShelter.enqueue(new shelter.Dog('Zara'));
    animalShelter.enqueue(new shelter.Dog('Jackson'));
    let adopted  = animalShelter.dequeue('');
    expect(adopted.print()).toEqual('Zara is good dog!');
  });
  it('Error handling when you try to dequeue something that is neither a \'cat\', \'dog\' or an empty string ', () => {
    let adopted  = animalShelter.dequeue('pig');
    expect(adopted).toBeFalsy();
  });
  it('Can successfully print the resulting object from a dequeue action ', () => {
    animalShelter.enqueue(new shelter.Dog('Lexy'));
    let adopted  = animalShelter.dequeue('');
    expect(adopted.print()).toEqual('Jackson is good dog!');
  });
  it('Can successfully remove animal from the middle of the queue ', () => {
    animalShelter.enqueue(new shelter.Dog('Strelka'));
    animalShelter.enqueue(new shelter.Cat('Marta'));
    animalShelter.enqueue(new shelter.Dog('Bobik'));
    let adopted  = animalShelter.dequeue('cat');
    expect(adopted.print()).toEqual('Marta is sweet cat!');
  });
}); 
