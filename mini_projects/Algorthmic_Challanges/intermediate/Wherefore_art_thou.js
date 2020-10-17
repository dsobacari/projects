//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

//For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    var arr = [];
  
    function equalObjects(val1, val2) {
       //if both are not objects, and not null, immediately compare the values for equality
        if (val1 === val2) return true;
  
      //if any of them are null or not objects return false
      if (val1 == null || typeof val1 != "object" || 
          val2 == null || typeof val2 != "object") return false;
  
      //Use Object.keys to go over the properties. 
      let keys1 = Object.keys(val1); let keys2 = Object.keys(val2);
   
  
      //ensure that collection's object have the same or more number of properties otherwise they cant be equal 
      if (keys1.length < keys2.length) return false;
      //console.log('( collection ) keys1= ', keys1, '');
      //console.log('(   source   ) keys2= ', keys2, '\n');
      //console.log('( collection ) keys1.length = ', keys1.length, '');
      //console.log('(   source   ) keys1.length =  ', keys2.length, '\n'); 
  
      for (let key of keys2) {
        //when looping over one of the object’s properties to compare them, always first make sure the other actually has a property by that name.
        
        if (!keys2.includes(key) || (val1[key]!=val2[key])) return false;
        //console.log('( collection ) val1[ ', key, ']= ', val1[key], '');
        //console.log('( collection ) val2[ ', key, ']= ', val2[key], '');
  
        //Returning the correct value from the function is best done by immediately returning false when a mismatch is found and returning true at the end of the function.
      }
      return true;
    }
    
  
    for(let i=0; i<collection.length; i++) {
      //console.log('collection[', i , ']=', collection[i], '\n');
      let val1= collection[i]; let val2= source;
      //console.log('( collection ) val1= ', val1, '');
      //console.log('(   source   ) val2= ', val2, '\n'); 
      if (equalObjects(val1, val2)) {
      arr.push(val1);
      }
  
  
    }  
    return arr;
  }
  
  //whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
  
  //whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
  
  //whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
  
  //whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});