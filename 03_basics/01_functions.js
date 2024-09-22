function sayMyName () {
    console.log("S");
    console.log("O");
    console.log("M");
    console.log("U");
}

// sayMyName()

function addTwoNumbers (number1, number2) {
    return number1 + number2;
}

// console.log(addTwoNumbers(2, null));
// console.log(addTwoNumbers(5,5));

function loginUserMessage (username = "somu") { //hard coded parameters
    if(username===undefined){
        console.log("Please enter a usename");
        return
    }
    return `${username} just logged In`
}

console.log(loginUserMessage()) //if we dosent pass any value then it return undefined