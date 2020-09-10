//Check if a string (first argument, str) ends with the given target string (second argument, target).

//This challenge can be solved with the .ends With() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  let j = str.length - target.length;
  
  for (let i=0; i<target.length; i++) {  
    if (str[j] != target[i]) {
         return false;
      }
    j++;
  } 
  return true;
}

confirmEnding("Bastian", "an");
/*

function confirmEnding(str, target) {
                    //7 - 2 = 5 length is not zero based
  return str.slice(str.length - target.length) === target; //slice is zero based, .slice(5)='an' cutting from 'a' not including 'a'
                                              // 'an'=== 'an' = true 
}
*/