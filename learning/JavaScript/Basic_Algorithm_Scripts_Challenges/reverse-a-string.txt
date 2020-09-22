//Reverse the provided string.

//You may need to turn the string into an array before you can reverse it.

//Your result must be a string.
function reverseString(str) {
  let arr = [];
for (let i=0; i<str.length; i++ ){
     arr.unshift(str[i]);
} 
  return str= (String(arr)).replace(/,/g,''); //regex used 
}

reverseString("hello");

/*


function reverseString(str) {
  //   new empty temp str |  length of str -1 zero base | start at last str pos 
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]; // each loop cocatenate to itself
  }
  return reversedStr;
}
*/


/*

function reverseString(str) {
  return str
    .split("")  //split by char in an array
    .reverse()  // reverse the array
    .join(""); //loin back the reveresed string wuth no comma
}

*/