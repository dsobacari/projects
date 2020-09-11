function getIndexToIns(arr, num) {
//first sort using bubble methode the whole thing could've been done without sorting
/*
let swap;
do{ 
  swap = false; 
  for (let i=0; i<arr.length; i++) {
    if (arr[i]>arr[i+1]) {  //If the current item is greater than the next one, then they will get swapped
      let temp =arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      swap = true; // if a swap was performed swap is assigned true
    }
   
}
} 
while(swap); // swap is true  perform do
*/
//count how many numbers smaller in the sorted
let count =0;
for (let j=0; j<arr.length; j++) {
    if (num>arr[j]) {
     count++;
    }
} return count;
}

//getIndexToIns([40, 60], 50);
//getIndexToIns([10, 20, 30, 40, 50], 35);
//getIndexToIns([10, 3, 5], 3);
//getIndexToIns([2, 20, 10], 19)
//getIndexToIns([], 1)
//getIndexToIns([2, 5, 10], 15)