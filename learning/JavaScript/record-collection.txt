
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

//collection[5439].artist = "ABBA"
//console.log(collection);

function updateRecords(object, id, prop, value) {
//If prop isn't tracks and value isn't an empty string
if ((prop != "tracks") && (value !="")) {
//update or set that album's prop to value.
object[id][prop] = value;
}
//If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
if ((prop === "tracks")) {
      object[id][prop]= object[id][prop] || [];
      object[id][prop].push(value);
  
}
//If value is an empty string, delete the given prop property from the album.
if (value==="") {
   delete object[id][prop];
}
  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');
