//JavaScript Algorithms and Data Structures Projects: Cash Register
//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

//cid is a 2D array listing available currency.

//The checkCashRegister() function should always return an object with a status key and a change key.

//Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

//Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

//Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

/*
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:
*/

/*

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

*/


function checkCashRegister(price, cash, cid) {
  
    function reverse(arr) {
            let newArr= [];
            for(val of cid) {
            newArr.unshift(val);
            }
            return newArr; 
    }

    let denominator = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

    let owedChange = (cash - price).toFixed(2);
    let orderedCid = reverse(cid);
    let i=0;
    let output = [];
    let totalCID = 0;
    //console.log('orderedCid:', orderedCid, '\n');
    //console.log('owedChange:', owedChange, '\n');
    for( let x of orderedCid){
      totalCID += x[1];
    }

    if (totalCID < owedChange) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    
    if (totalCID == owedChange) {
      return {status: "CLOSED", change: [...cid]};
    }


    for(let val of orderedCid){
      let coinCounter=0;
      //if (denominator[i] <= owedChange) {
      //console.log('owedChange:', owedChange, '');
      //console.log('val:', val[1], '');
      //console.log('denominator:', denominator[i], '\n');

        while ((val[1]>0) && (owedChange>=denominator[i])){
          //console.log('in while owedChange:', owedChange, '');
          val[1]= val[1] - denominator[i];
          owedChange= (owedChange - denominator[i]).toFixed(2);
          coinCounter++; 
        }

      //}
      
      if (coinCounter>0) { 
        output.push([val[0], Number((denominator[i] * coinCounter).toFixed(2))]);
      }
    i++;  
    }
    
    if (owedChange>0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else return {status: "OPEN", change: [...output]};
  /*  
  return {status: "INSUFFICIENT_FUNDS", change: []}
  return {status: "CLOSED", change: [...]}
  return {status: "OPEN", change: [...]}
  */
}


//checkCashRegister(19.50, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return an object.

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.