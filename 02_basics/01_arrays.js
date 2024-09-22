const arr = [0, 1, 6, "somu", true] 
//in Js its not necessary to have same data types in an array
// array in JS is resizeable

console.log(arr[0]); //1st element of array

// Methods of array in  JS
const hero = ["batman", "nagraj", "somu"]
const arr2 = new Array(1,2,3,4)
console.log(arr2);
console.log(arr2.length);

// add elemet in array
arr2.push(5);
arr2.push(6);
console.log(arr2);

//remove last value of array 
// pop()

console.log(arr2.slice(1,3))
console.log(arr2)

//splice manupulate the original arrya and remove the elemets form the og arrya that are mentioned
console.log(arr2.splice(1,3));
console.log(arr2);

