//Return the factorial of the provided integer.
//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//Factorials are often represented with the shorthand notation n!
function factorialize(num) {
 let temp = 1;
  for (let i=num; i>=1; i--) {
    temp = temp * i;
  }

  return temp;
}

factorialize(5);


/* recursion

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);
*/