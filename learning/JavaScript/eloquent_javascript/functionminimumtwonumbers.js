//The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
// Your code here.

/* Declaration Notation

function min(a,b) {
	return Math.min(a,b);
}

*/

/* Arrow Notation */
const min = (a,b) => Math.min(a,b);


console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
