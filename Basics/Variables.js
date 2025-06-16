const accountId = 14453
let accountEmail = "Jhulla@gmail.com"
var accountPassword = "1234"
accountCity = "Aurangabad"
let accountState

// accountId = 2;--->not allowed

accountEmail = "abc@gmail.com"
accountPassword = "4567"
accountCity = "Bhopal"

/*  
Prefer to use "let" becuse of issue of block scope and functional scope  in "var"  
*/

console.log(accountId)
console.table([accountEmail,accountCity,accountPassword])