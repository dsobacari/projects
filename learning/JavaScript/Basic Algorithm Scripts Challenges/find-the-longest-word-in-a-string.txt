//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWordLength(str) {
  let strWords = str.split(' '); //spliting the string into an words array
  let count =0;                   //initialize count
  for (let i=0; i<strWords.length; i++) { // going through evreyword in the array
    if (strWords[i].length > count) {      //if word's length is biger then the prev
    count = strWords[i].length;           //count is updated
    }
  }
  return count;

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");