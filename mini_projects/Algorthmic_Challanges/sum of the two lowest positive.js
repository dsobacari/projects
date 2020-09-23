//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
function sumTwoSmallestNumbers(numbers) {  
  //Code here
  
  let filtered = numbers.filter( element => element > 0 );
  let smallest = (filtered.splice(filtered.indexOf(Math.min(...filtered)), 1)); 
  let secondSmalest = (filtered.splice(filtered.indexOf(Math.min(...filtered)), 1));
  return smallest[0] + secondSmalest[0];
  //return filtered;
}

/*
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};
*/

sumTwoSmallestNumbers([5, 8, 12, 19, 22])