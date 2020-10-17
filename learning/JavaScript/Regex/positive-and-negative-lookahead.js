//A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

//A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there.
  
//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
