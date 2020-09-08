//dollar sign character $ at the end of the regex, can search the end of strings
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
