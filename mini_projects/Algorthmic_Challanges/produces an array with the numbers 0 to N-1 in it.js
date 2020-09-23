//We want an array, but not just any old array, an array with contents!
//Write a function that produces an array with the numbers 0 to N-1 in it.
//For example, the following code will result in an array containing the numbers 0 to 4:

// ...Array(N) fills in an empty array of n size 
//.keys() returns a new Array Iterator object that contains the keys for each index in the array.

const arr = N =>  N > 1 ? [...Array(N).keys()] : [];

//const arr = N => Array.from({length: N}, (_, i) => i)
arr(0);