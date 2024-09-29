// fetch('https://api.github.com/users/shalshcode08').then().catch()

const promise1 = new Promise(function(resolve, reject){
    //to an async task
    //DB calls
    setTimeout(function(){
        console.log("Async task is completed")
        resolve()
    },1000)
})

promise1.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
})

.then(function(){
    console.log("Async 2 resolved");
    
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username : "somu",
            email : "somu@google.com"
        })
    },1000)
})

promise3.then(function(user){
    console.log(user);
    
})

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({
                username: "somu",
                password : "123"
            })
        }
        else{
            reject("Error : Something went wrong")
        }
    },1000)
})

promise4.then((user)=> {
    console.log(user);
    
    // console.log(user.username);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("Finally it resolve or rejected");
    
})


const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username: "javascript",
                password : "123"
            })
        }
        else{
            reject("Error : JS went wrong")
        }
    },1000)
})


async function consumePromise5(){
    const response = await promise5
    console.log(response);
    
}

consumePromise5()