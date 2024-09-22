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

function calculateCartPrice (val1, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 300 , 400));


//rest operator ... || spread operator
// this will help in pass multiple parameter user ... operator(spread)

const user = {
    username : "somu",
    price : 199
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username}`);
    console.log(`price is ${anyobject.price}`);
}

handleObject(user)


const myarr = [100,200,300]
function returnArray(mynewarr){
    return mynewarr;
}

console.log(returnArray(myarr));