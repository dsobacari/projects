//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.
/*
function getCount(str) {
  var vowelsCount = 0;
  const re=/[AEIOUaeiou]/g
  // enter your majic here
  let myVowelArray = str.match(re);
  return (myVowelArray) ? myVowelArray.length : 0;
}
*/

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

//getCount("abracadabra")
getCount("my pyx")