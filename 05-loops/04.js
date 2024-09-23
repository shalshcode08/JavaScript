const arr = ["js", "java", "python", "ruby", "cpp"]
//highre order function

// arr.forEach(function (item){
//     console.log(item);
// })

//we can also use arrow functio
// arr.forEach((item)=> {
//     console.log(item);
// })

// function printMe (item ){
//     console.log(item);
// }

// arr.forEach(printMe)


// arr.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


const coding = [
    {
        language : "JavaScript",
        file : "js"
    },
    {
        language : "C++",
        file : "cpp",
    },
    {   
        language : "Python",
        file : "py"
    }
]

coding.forEach((item)=>{
    console.log(item.language);
})