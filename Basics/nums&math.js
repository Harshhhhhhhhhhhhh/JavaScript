const score = 100;

const newScore = new Number(101);

// console.log(newScore.toString());
// console.log(newScore.toFixed(1));

const otherNumber = 3.9899;
// console.log(otherNumber.toPrecision(5));

const num = 10000000;
console.log(num.toLocaleString())
console.log(num.toLocaleString("en-IN"))


/************************MATH*********************/

console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.round(4.5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.9));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.floor(4.1));
console.log(Math.min(1,4,5,2,6,3));
console.log(Math.max(1,4,5,2,6,3));
console.log(Math.floor((Math.random()*10)+1));

//let suppose we have to get randome value b/w 10 and 20
const minRange = 10;
const maxRange = 20;

console.log(Math.floor((Math.random()*(maxRange-minRange+1)+maxRange)));



//  node "nums&math.js"