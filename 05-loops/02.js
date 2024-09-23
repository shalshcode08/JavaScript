// for of loop 

// ['', '', '']
// [{}, {}, {}]

const arr = [1,2,3,4,5]

// forof loop
for (const i of arr) {
    // console.log(i);
}

const greeting = "Hello world"
for (const i of greeting) {
    // console.log(`Each charcater is ${i}`);
}

//Maps
//it also holds key:value pairs
const map = new Map()
map.set("India", "Deli")
map.set("Usa" , "LA")
console.log(map);

for (const [key, value] of map){
    console.log(key , value);
}