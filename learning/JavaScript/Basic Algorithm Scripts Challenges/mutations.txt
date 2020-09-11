function mutation(arr) {
  var test = arr[1].toLowerCase(); // everything to lower case easier to compare
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
    //checks for occurrences of test[i] in the target string 
  }
  return true;
}
mutation(["hello", "hey"]);
