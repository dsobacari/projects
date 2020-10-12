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
  
  
  fearNotLetter("abce");
