//if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

//Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

//If you haven’t already, also write a recursive version of nth.

// Your code here.



//Building up a list is easier when done back to front. So arrayToList could iterate over the array backwards (see the previous exercise) and, for each element, add an object to the list. You can use a local binding to hold the part of the list that was built so far and use an assignment like list = {value: X, rest: list} to add an element.
function arrayToList(arr) {
    let list= null;
  for (let i=arr.length-1; i>=0; i--){
    list = {value: arr[i], rest: list}
  } return list;
}


/* 
    To run over a list (in listToArray and nth), a for loop specification like this can be used:
    for (let node = list; node; node = node.rest) {}
*/

function listToArray(list) {
let arr = [];
  for (let node = list; node; node = node.rest) {
      arr.push(node.value);
  } return arr;
}
function prepend(element, list)	{
  let newList= {value: null, rest: null};
  Object.assign(newList, {value: element, rest: list});
  return newList;
}

function nth(list, number) {
if (!list) return undefined;
else if (number==0) {
  return list.value;
} else { 
   return nth(list.rest, number-1);
   }
}

/*
function nth(list, number) {
  let newNthList= listToArray(list);
  return newNthList[number];
}
*/


console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(20, null));
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20