const userEmail = "somu@gmail.com"

//we have not done any comparison
if(userEmail){
    console.log("got user email");
}
else{
    console.log("dont have user email")
}


// falsy Value :-
// false
// 0
// -0
// BigInt 0n
// null
// undefined
// NaN

//all other than these are thruty values

// thruthy value :-
// "0"
// "false"
// ""
// " "
// []
// {}
// function()


//nullish coalescaling operator (??): null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);


// ternary operator
// condition ? true : false
const price = 100
price >= 80 ? console.log("more than 80") : console.log("less than 80");

