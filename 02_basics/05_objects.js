const user = {
    id : 123,
    name : "somu",
    email : "somu@google.com",
    course : "JS",
    coursePrice : 999,
    isLoggedIn : false
}

// object destructure 
const {course} = user
console.log(course);

const {coursePrice : price} = user
console.log(price);


// JSON 
// {
//     "name" : "somu",
//     "email" : "somu@hotmail.com"
// }