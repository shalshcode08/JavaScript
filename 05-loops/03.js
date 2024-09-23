const myObj =   {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift By Apple"
}

//Fon in loop 
for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}


//arrays keys are index
const programming = ["js", "java", "python", "cpp"]
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}