//Objects Singleton
//define objects as constructor

// const tinderUser  = new Object() // => Singleton Object
// these two are same : both will return the same 
const tinderUser = {} // Non Singleton Object

tinderUser.id = 123
tinderUser.name = "Somu"
tinderUser.isLoggedIn = false

console.log(tinderUser);


// Objects indside Objects
const regularUser = {
    email : "somu@gmail.com",
    fullname : {
        firstName : "Somu",
        lastName : "Kumar"
    }
}


console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.firstName);

const obj1 = {
    1 : "a",
    2: "b"
}
const obj2 ={
    3 : "c",
    4 : "d"
}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

//Spread operator in objects
const obj4 = {... obj1, ... obj2}
console.log(obj4);
