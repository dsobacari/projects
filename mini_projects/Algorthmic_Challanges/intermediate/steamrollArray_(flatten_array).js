//Flatten a nested array. You must account for varying levels of nesting.

//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

function steamrollArray(arr) {
  
    const result= [];
  
    let flatten = function (i) {
      if (!Array.isArray(i)) {              // if i is a value not an array
        result.push(i);     
      } else {                              // if i is an an Array, recursively deconstruct deeper    
        result.push(...steamrollArray(i));
      }  
    }
    
    arr.forEach(flatten);                   // for each aray in array flatten it
    return result;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
  //steamrollArray([[["a"]], [["b"]]]);
  //steamrollArray([1, [], [3, [[4]]]]);
  //steamrollArray([1, {}, [3, [[4]]]]);