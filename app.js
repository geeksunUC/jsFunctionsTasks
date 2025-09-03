// Arrow function calcAverage
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


checkWinner(avgDolphins, avgKoalas);
