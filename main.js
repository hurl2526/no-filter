/******************
 * YOUR CODE HERE *
 ******************/
function onlyOdds (numbersArray){
  let odds = [];
  for (let i = 0; i < numbersArray.length; i++){
    if (numbersArray[i] % 2 === 1)
    {odds.push(numbersArray[i]);}
  }
return odds;
}
onlyOdds([1,2,3,4]);

function onlyEvens (numbersArray){
  let even = [];
  for (let i = 0; i < numbersArray.length; i++){
    if (numbersArray[i] % 2 === 0)
    {even.push(numbersArray[i]);}
  }
return even;
}
onlyEvens([1,2,3,4]);

function shortNamesOnly(namesArray){
  let short = [];
  for (let i = 0; i < namesArray.length; i++)
    if (namesArray[i].length < 7){
      short.push(namesArray[i]);
    }
return short;
}

function dNames (namesArray){
  let dNames = [];
  for (let i = 0; i < namesArray.length; i++){
    if (namesArray[i][0] === 'D') {
      dNames.push(namesArray[i]);
    }
  }
  return dNames;
}

dNames(['Dijon', 'Mustard'])




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
