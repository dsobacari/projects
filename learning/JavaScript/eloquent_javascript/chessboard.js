//Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// Your code here.


let size = 8; let string = '';
for (i=0; i<size; i++) {
  for(j=0; j<size; j++) {
    if((i+j)%2===0)  {
      string += ' ';
    } else {
      string += '#'};
  } 
  string += "\n";
}
console.log(string);