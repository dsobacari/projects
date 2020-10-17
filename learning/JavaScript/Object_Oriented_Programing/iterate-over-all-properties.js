//Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.


function Dog(name) {        //constructor
  this.name = name;         //own property in Dog
}

Dog.prototype.numLegs = 4;  //prototype property numLegs in Dog

let beagle = new Dog("Snoopy"); //creates an new beagle instance of Dog

let ownProps = [];    //empty array of own property/ies
let prototypeProps = [];  //empty array of prototype property/ies

// Only change code below this line
for (let property in beagle){ //iterates through each beagle properties 
  if(beagle.hasOwnProperty(property)) { //if its a own propertie
    ownProps.push(property);            //pushes it in the ownProps
  } else prototypeProps.push(property); // pushes it in the prototypeProps
}