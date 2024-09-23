const num = [1,2,3,4,5,6,7,8,9,10]

// const newNums = num.map((num)=> num+10)
// console.log(newNums);

//channing of funcitons
const newNums = num.map((item)=> item*10).map((item)=> item+2).filter((item)=> item>=40)
console.log(newNums);
