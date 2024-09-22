const hero1 = ["nag", "super"]
const hero2 = ["iron", "cap"]

// hero1.push(hero2);
// console.log(hero1);
// console.log(hero1[2][1]); //not a good way 

// we can also use concat 
const hero3 = hero1.concat(hero2);
console.log(hero3);

//spread operator

const newhero = [...hero1, ...hero2]
console.log(newhero);

console.log(Array.isArray("Somya"));
console.log(Array.from("Somya"));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

