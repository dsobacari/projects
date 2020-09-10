//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
 
    let newString = str.slice(0, num);  //slice from index zero to the num'th word
    if (newString.length >= str.length) { //checks if the string needs to be truncated 
        return newString;                 // prints out the string untruncated    
    } return newString.concat('...');     //prints out the string truncated  
}


truncateString("A-tisket a-tasket A green and yellow basket", 8); //"A-tisket..."
//truncateString("Peter Piper picked a peck of pickled peppers", 11);
//truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
//truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
//truncateString("A-", 1);

/*
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
*/