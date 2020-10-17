function bouncer(arr) {
  let newArr = [];
  for (let i=0; i<arr.length; i++){
  //let test= Boolean(arr[i]);
   if ( Boolean(arr[i])== true) {
     newArr.push(arr[i]);
  };
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);

/*

function bouncer(arr) {
  return arr.filter(Boolean); //pass built-in function Boolean to .filter
}
*/