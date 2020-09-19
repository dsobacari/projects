function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);// create a new Object dog.protoptype
Dog.prototype.constructor = Dog; // set dog  prototype to the instance of the parent Animal

Dog.prototype.bark = function () {
  console.log("Woof!");
};
// Only change code above this line

let beagle = new Dog();
