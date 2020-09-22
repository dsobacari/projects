//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
      let newArr=[];
  for (let i=0; i<arr.length; i++) {
    
    let temp= arr[i][1];  //[1] important if we have negative numbers in the array  
    //console.log(arr[i]);
    arr[i].forEach(element => {
      
      if (element > temp){
        temp = element;
        
      } 
    }); newArr.push(temp);
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/* (Declarative approach)

function largestOfFour(arr) {
  return arr.map(function(group) {                 //we map all items within the main array to a new array using
    return group.reduce(function(prev, current) { //reduce() method executes a provided function for each value of the array (from left-to-right).
      return current > prev ? current : prev;     //if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it’s the last item
    });
  });
}
*/

