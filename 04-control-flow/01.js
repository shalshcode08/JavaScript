//if

const condition = true
const temp = 41
//this condition should be true then only this scope will execute
if(condition) {
    // console.log("execute");
    
}

if(temp >50){
    // console.log("temp is less than 50");
}

// console.log("temp is equal to 41");

const balance  = 1000

if(balance>500) console.log("test") //implicit scope

//nested 
if(balance<500){
    console.log("less than");
}
else if(balance < 750 ){
    console.log("less than 750");
}
else if(balance < 900 ){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}