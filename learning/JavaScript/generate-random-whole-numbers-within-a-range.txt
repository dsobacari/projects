//generate a random whole number that falls within a range of two specific numbers.
function randomRange(myMin, myMax) {
  
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;;

}
