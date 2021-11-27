function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let currency = [
    ["ONE HUNDRED",100], ["TWENTY",20], ["TEN",10], ["FIVE",5], ["ONE",1], ["QUARTER",0.25], ["DIME",0.1], ["NICKEL",0.05], ["PENNY",0.01] 
  ]
  cid.reverse()
  change = change.toFixed(2)
  console.log(change)
  let currencyCount = [];
  let returnArr = [];
  let isArrEqual;
  let returnObj = {
    status:"",
    change: []
  }

  for (let i=0; i<currency.length; i++) {
    currencyCount.push(Math.round(cid[i][1]/currency[i][1]));
    let countCurr = 0;
    while(change >= currency[i][1] && currencyCount[i]!==0){
      change -= currency[i][1];
      countCurr++;
      currencyCount[i]--
      change = change.toFixed(2)
    }
    returnArr.push([currency[i][0], countCurr])
  }
  returnArr.forEach((item,index) => item[1]*=currency[index][1])
  let filteredReturnArr = returnArr.filter(item=> item[1] !== 0)
  let filteredCid = cid.filter(item=> item[1] !== 0)

  isArrEqual = filteredReturnArr.every((item,index) => item[1] === filteredCid[index][1])

  //cid sum
  let cidSum = 0;
  cid.forEach(item => cidSum += item[1])
  console.log(cidSum)

  if (isArrEqual && cidSum>change){
    returnObj.status = "CLOSED";
    returnObj.change = returnArr.reverse();
  } else if(change == 0) {
    returnObj.status = "OPEN";
    returnObj.change = filteredReturnArr;
  } else {
    returnObj.status = "INSUFFICIENT_FUNDS";
  }
  console.log(returnObj)
  return returnObj;
}


checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 5], ["TEN", 10], ["TWENTY", 0], ["ONE HUNDRED", 0]]);