// let a = 10
// const b = 20
// var c = 30

//this is only scope
// { 

// }

// eg => 
if (true) {
    let a = 10
    const b = 20
    var c = 30
}


// console.log(a);
// console.log(b); 
// these two will not print because of the scope as let and const cannot be used otside
console.log(c);
// but on the same hand var can be used outside the scope