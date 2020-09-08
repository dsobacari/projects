//Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  //base case
  if (startNum === endNum) {
    return [startNum];
  } 
  //end base case  
    
    
    
    else {
    const countArray = rangeOfNumbers(startNum , endNum - 1);
    countArray.push(endNum);
    return countArray;
    }
}
console.log(rangeOfNumbers(1,1));
