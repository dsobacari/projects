//
/*
function hello(name) {
  if (name) { 
    let modified = name.toLowerCase();
    let firstLetter =name[0].toUpperCase();
    let modified1 = modified.split('');
    modified1.splice(0, 1, firstLetter);
    return 'Hello, ' + modified1.join('') +'!';
}
return 'Hello, World!'
}


*/
/*
const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;
*/

function hello(name = 'World') {
    if(name !== ''){
      name = name.toLowerCase()
      name = name.replace([name[0]],name[0].toUpperCase())
      return `Hello, ${name}!`
    }else{
      return 'Hello, World!'
    }
  }
    hello('');
    hello('johN');