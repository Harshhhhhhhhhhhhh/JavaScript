//dataTypes-summary.js
//Primitive data types
// 7 types:String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //this is same as---->let userEmail = undefined

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id===anotherId)



//Reference(Non Primitive)
//Array , Objects , Functions

const heros = ["Thor" , "Iron Man", "Ant-Man"]
let myObj = {
    name:"Harsh",
    age:"22",
}

const myFunction = function(){
    console.log("Hello World")
}
