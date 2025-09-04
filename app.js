/* // Arrow function calcAverage
const calcAverage = (score1 , score2, score3) => {
  return (score1 + score2 + score3) / 3;
}
// Calculate average for both teams
let avgDolphins ; 
let avgKoalas ;
// create function checkWinner
let checkWinner = function(avgDolphins, avgKoalas){
  if(avgDolphins >= 2* avgKoalas)
    console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas})`);
  else if(avgKoalas >= 2* avgDolphins)
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  else console.log("No team wins!");
}
// Call checkWinner function with Data1
//avgDolphins = Math.round(calcAverage(44, 23, 71));
//avgKoalas =  Math.round(calcAverage(65, 54, 49));
// checkWinner(avgDolphins, avgKoalas);
// Call checkWinner function with Data2
avgDolphins = Math.round(calcAverage(85, 54, 41));
avgKoalas =  Math.round(calcAverage(23, 34, 27));

checkWinner(avgDolphins, avgKoalas); */

/// Coding Challenge #3
"use strict"
// All code in this file will run in strict mode
// -1- function calcTip
const calcTip = bill => {
  if(bill >= 50 && bill <= 300) return bill * 0.15;
  else return bill * 0.2;
}
console.log("tip calculated" + calcTip(100));

// -2- array bill 
let billArray = [125, 555, 44];
// -3- Tips calculated from the function below
let tips = [calcTip(billArray[0]), calcTip(billArray[1]), calcTip(billArray[2])]
for(let i = 0 ;  i < tips.length; i++) {
  console.log(tips[i]);
}
// -4- Bonus
const total = [];
for( let i = 0 ; i < tips.length ; i++){
   total.push(tips[i] + billArray[i]) ;
}
console.log(total);