//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
/*
function repeatStringNumTimes(str, num) {
   let newString='';
  if (num <=0 ){
      return newString;
  } else {
    
    return repeatStringNumTimes(str, num-1) + newString.concat('', str);
  }
}
*/
/*
function repeatStringNumTimes(str, num) {
  let temp = '';
  if (num <=0) { 
    return temp; 
  } 
  
  for (let i=0; i<num; i++) {
    temp = temp + str;
  } return temp;
}
*/

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", -2);
repeatStringNumTimes("abc", 0);