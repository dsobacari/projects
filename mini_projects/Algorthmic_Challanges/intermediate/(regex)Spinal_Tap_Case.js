//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// ...([a-z])([A-Z]) ...$1-$2----- the regex stores the match found in each bracket as a ‘$’ variable. It looks for a small letter next to a capital letter. Once it has found that it assigns the first letter to the ‘$1’ variable and the second letter to the ‘$2’ variable. It then replaces that match with the string on the right which contains a dash in the middle between the two characters and calls toLowerCase on the result.

// [_|\s]+ Replace space and underscore with -

function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])|[_|\s]+/g, '$1-$2').toLowerCase();
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("thisIsSpinalTap");
  spinalCase("TheAndyGriffith_Show");
  spinalCase("Teletubbies say Eh-oh");
  spinalCase("AllThe-small Things");