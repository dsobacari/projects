function chunkArrayInGroups(arr, size) {
    let newArray = [];
    
    for(let i=0; i<arr.length; i=i+size){
        //let element = arr.slice(i, size+i); //copies from original array a defined size from index i to second index + size;
        //newArray.slice(
        newArray.splice(i, 0, arr.slice(i, size+i));
                   // adds subarray to the newArray;             
       
    }return newArray;
}



chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
