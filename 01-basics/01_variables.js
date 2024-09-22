const accountId = 12345
//const variable cannot be changed 

let accountEmail = "somu@gmail.com"
var accountPassword = "12345678"
accountCity = "Delhi" // this possible for variable declaration but not a good way 

// accountId = 11111 // will give error because const cannot be modified
accountEmail = "somu123@gmail.com" 
// this will not give error because let can be changed in th javascripts

console.log(accountId)
console.log(accountEmail);


//table helps to console log all the variables in a tabular form
console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity
])

let accountState; // this will be return as undefiend


//this is called scope in JS {}
// Now days VAR is not used because of issue in block scope and fucntional scope 
// const and let is only used 