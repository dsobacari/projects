//Find the missing letter in the passed letter range and return it.

//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    let allLetters = 'abcdefghijklmnopqrstuvwxyz';
    let indexOfFirst = allLetters.indexOf(str[0]);
    //console.log(indexOfFirst);
    for (let i=0; i<str.length; i++) {  
      if (str[i] != allLetters[indexOfFirst]) return allLetters[indexOfFirst];
      indexOfFirst++;
    }
    return undefined;
  }


/* optimized and more elegant
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var len = str.length;
  var start = alphabet.indexOf(str[0]);

  for(let i = start; i < start + len; i++){
    if(!str.includes(alphabet[i])){
      return alphabet[i];
    }
  return undefined;
*/


  fearNotLetter("abce");
