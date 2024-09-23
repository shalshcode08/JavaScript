// Immediately Invoked Function Expression (IIFE) 
//means immediately koi function likha or usko turant inkove kar diya

(function one () {
    console.log("db Connected");
}) ();


//global scope k variables se problem hoti hai kayi baar to uske pollution ko hatane ke liye iife function ka use kiya

//we can also write arrow function as iife
( (name)=> {
    console.log(`DB Connected ${name}`);
})("Somu")