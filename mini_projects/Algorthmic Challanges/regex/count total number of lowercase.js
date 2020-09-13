//Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
    //How many?
  let regex= /[a-z]/g
  let found = str.match(regex);
  return (found) ? found.length : 0;
}