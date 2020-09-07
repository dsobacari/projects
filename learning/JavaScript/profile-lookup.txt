// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

//console.log(contacts);
//console.log(contacts[0]);
//console.log(contacts[0].firstName);
//console.log(contacts[0].firstName); //Akirah
//console.log(contacts[0].likes); //[ 'Pizza', 'Coding', 'Brownie Points' ]

function lookUpProfile(name, prop){
// Only change code below this line
  for (var i=0; i<contacts.length; i++) {
//The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";      
    }  
  } return "No such contact";
// Only change code above this line
}
lookUpProfile("Akira", "likes");

lookUpProfile("Kristian", "lastName");