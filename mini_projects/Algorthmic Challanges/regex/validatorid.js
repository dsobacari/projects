/*Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/

function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username)
  }

  //            ^[0-9a-z_]{4,16}$
  //    ^       start
  //    []      matches a single character liated in the brackets
  //    0-9     digit
  //    a-z     lower !!!!freaking case
  //