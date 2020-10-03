
function deepEqual(val1, val2){

    //if both are not objects, and not null, immediately compare the values for equality
      if (val1 === val2) return true;
  
    //if any of them are null or not objects return false
    if (val1 == null || typeof val1 != "object" || 
        val2 == null || typeof val2 != "object") return false;
    
    //Use Object.keys to go over the properties. 
    let keys1 = Object.keys(val1); let keys2 = Object.keys(val2);
  
    //ensure that both objects have the same number of properties 
    if (keys1.length != keys2.length) return false;
  
    for (let key of keys1) {
      //when looping over one of the object’s properties to compare them, always first make sure the other actually has a property by that name.
      if (!keys2.includes(key) || !deepEqual(val1[key], val2[key])) return false;
  
      //Returning the correct value from the function is best done by immediately returning false when a mismatch is found and returning true at the end of the function.
    }
    return true;
  }
  let obj = {here: {is: "an"}, object: 2};
  
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true