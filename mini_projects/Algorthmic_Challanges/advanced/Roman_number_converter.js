//Roman Numeral Converter
//Convert the given number into a roman numeral.

//All roman numerals answers should be provided in upper-case.
/*
function convertToRoman(num) {
  
  let arabNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNum= ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  if ( arabNum>3999 || arabNum<0) return arabNum + ': Out of Range';

  romanize= [];
  for (i=0; i<=arabNum.length; i++) {
    while(arabNum[i]<=num) {
      romanize = romanize + romanNum[i];
      num = num-arabNum[i];
    }
  }

  return romanize;
}
*/

//recursive solution 

function convertToRoman(num) {
    if(num>=1000) return 'M' + convertToRoman(num-1000);
    if(num>=900)  return 'CM' + convertToRoman(num-900);
    if(num>=500)  return 'D' + convertToRoman(num-500);
    if(num>=400)  return 'CD' + convertToRoman(num-400);
    if(num>=100)  return 'C' + convertToRoman(num-100);
    if(num>=90)  return 'XC' + convertToRoman(num-90);
    if(num>=50)  return 'L' + convertToRoman(num-50);
    if(num>=40)  return 'XL' + convertToRoman(num-40);
    if(num>=10)  return 'X' + convertToRoman(num-10);
    if(num>=9)  return 'IX' + convertToRoman(num-9);
    if(num>=5)  return 'V' + convertToRoman(num-5);
    if(num>=4)  return 'IV' + convertToRoman(num-4);
    if(num>=1)  return 'I' + convertToRoman(num-1);
    return '';
  }
  
  convertToRoman(1986)
  //convertToRoman(3900) //should return "II".
  
  convertToRoman(3) //should return "III".
  
  //convertToRoman(4) //should return "IV".
  
  //convertToRoman(5) //should return "V".
  
  //convertToRoman(9) //should return "IX".
  
  //convertToRoman(12) //should return "XII".
  
  //convertToRoman(16) //should return "XVI".
  
  //convertToRoman(29) //should return "XXIX".
  
  //convertToRoman(44) //should return "XLIV".
  
  //convertToRoman(45) //should return "XLV"
  
  //convertToRoman(68) //should return "LXVIII"
  
  //convertToRoman(83) //should return "LXXXIII"
  
  //convertToRoman(97) //should return "XCVII"
  
  //convertToRoman(99) //should return "XCIX"
  
  //convertToRoman(400) //should return "CD"
  
  //convertToRoman(500) //should return "D"
  
  //convertToRoman(501) //should return "DI"
  
  //convertToRoman(649) //should return "DCXLIX"
  
  //convertToRoman(798) //should return "DCCXCVIII"
  
  //convertToRoman(891) //should return "DCCCXCI"
  
  //convertToRoman(1000) //should return "M"
  
  //convertToRoman(1004) //should return "MIV"
  
  //convertToRoman(1006) //should return "MVI"
  
  //convertToRoman(1023) //should return "MXXIII"
  
  //convertToRoman(2014) //should return "MMXIV"
  
  //convertToRoman(3999) //should return "MMMCMXCIX"