//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(...arr) {
    return [].concat(...arr)
             //.sort((a, b) => a - b)
             .filter((item, index, inputArray)=> inputArray.indexOf(item) == index);
            
  }


/* more elegaant es6
function uniteUnique(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}
*/
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);