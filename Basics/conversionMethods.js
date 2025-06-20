let score = null;

console.log(typeof(score));

let valueInNumbers = Number(score);
console.log(typeof(valueInNumbers));
console.log(valueInNumbers)

/*

"33"------>33
"33abc"--->NAN
true------>1
false----->0
NULL------>0
undefined-->NAN


*/ 

let value = undefined;

let converToBoolean = Boolean(value);

console.log(typeof (converToBoolean));
console.log(converToBoolean);

/*


1--------->true
0--------->false
""-------->false
"harsh"--->true
null------>false
undefined-->false


*/