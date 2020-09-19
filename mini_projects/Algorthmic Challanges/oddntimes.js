/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  //happy coding!
  let value= A[1];
  for(i=0; i<A.length; i++) {
    let aux=0; 
    for(j=0; j<A.length; j++) {
      if (A[i] == A[j]) {
      aux++;
      }
      }
      if ((aux%2>0) && (aux>1)) {
        value=A[i];

  }
  
  } return value;
}