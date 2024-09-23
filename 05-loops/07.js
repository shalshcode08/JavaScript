// Reduce 

const num = [1,2,3,4,5,6,7,8,9,10]


const myTotal = num.reduce(function(acc ,currVal) {
    console.log(`acc : ${acc} and curVal : ${currVal}`);
    
    return acc + currVal
}, 0)

console.log(myTotal);
