/*

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(s) {
	// your code
  let aux = ''; //iniatialize empty string
  for (let i=0; i<s.length; i++) {
    aux+= s[i].slice().toUpperCase(); // add firstletter in upper case
    for (let j=1; j<=i; j++) {
    aux+= s[i].slice().toLowerCase();//add copies of letters in  lower case
    }
    aux= aux + '-'; // append dash at the end of each sequence
  } return aux.slice(0,-1); // return the whole string with no dash at the last one
}

accum("ZpglnRxqenU");