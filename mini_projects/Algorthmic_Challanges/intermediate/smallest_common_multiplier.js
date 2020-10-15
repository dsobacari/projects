//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.

//For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  
    //Create an array with all the numbers that are missing from the original array to make it easier to check when having to check for even division.
      function createArray(range) {
        let max= Math.max(...range);
        let min= Math.min(...range);
        let newArr=[];
        for (let i=max; i>=min; i--) {
            newArr.push(i);
        } 
        return newArr;
      }
    
      function divideable(divident, factor) {
        return (divident%factor===0);
      }
    
      let copyArr = createArray(arr);
      let multiple = copyArr[0]; 
      let result = false;
    
        do 
         {
          multiple++;
          let aux=0;
          for( let x of copyArr) {
            if (!divideable(multiple,x)) {
              break;
            }else aux++;
            (aux===copyArr.length) ? result= true : result = false;  
          }
         }
         while (!result);
         return multiple;
    }
    
    /* very elegant
    
    function smallestCommons(arr) {
    
      var max = Math.max(arr[0], arr[1]);
      var min = Math.min(arr[0], arr[1]);
      var mltple = max;
    
      for(var i = max; i >= min; i--){
        if(mltple % i !== 0){
          mltple += max; 
          i = max;
        } 
      }
    
      return mltple;  
    }
    
    */
    //smallestCommons([5,2]);
    //smallestCommons([5, 1]);
    //smallestCommons([2, 10]);
    //smallestCommons([1, 13])
    smallestCommons([23, 18])
    