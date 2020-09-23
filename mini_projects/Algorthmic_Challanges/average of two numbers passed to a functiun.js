/* 
function getAverage(marks){
  let sum = 0;
  for (let i=0; i<marks.length; i++){
    //num = marks[i]; 
    sum = sum + marks[i];
    
  } return Math.floor(sum/marks.length);
  
  
}
getAverage([2,2,2,2]);
*/
 
const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);


