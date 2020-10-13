//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    let arr=[0,1];
    for(let i=2; i<num+1; i++) {
      arr.push(arr[i-1] + arr[i-2]);
    }
    return arr.filter(x => (x%2!=0) & (x<=num))
              .reduce((accum, current) => accum + current);
  }
  
  sumFibs(1);
  //sumFibs(1)
  //sumFibs(1000);
  //sumFibs(4000000);
  //sumFibs(75024);
  //sumFibs(75025);