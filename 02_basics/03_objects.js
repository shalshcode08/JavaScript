//singleton
// whenever object is made through constructor , singlton is made 
// else with literal it is not

//Symbol 
const mySymbol = Symbol("Key1")

//Object literals

const user =  {
    name : "Somya",
    age : 20,
    hobby : "Coding",
    isLoggedIn : true,
    email : "somu@google.com",

    //using symbol as a key
    [mySymbol] : "mykey1"

}

console.log(user.name)
console.log(user["email"]);
console.log(user[mySymbol]);
console.log(typeof user.mySymbol);


user.email = "s@google.com"
// Object.freeze(user)
console.log(user);


// ****** Function ******

user.greeting = function() {
    console.log("Hello js User");  
}

console.log(user.greeting);

