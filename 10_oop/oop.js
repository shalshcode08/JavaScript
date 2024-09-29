// Object Literal 

const user = {
    username : "Somu",
    password : "123",
    loginCount : 1,
    isLoggedIn : true,
    //this all are properties

    getUserDetails : function(){
        console.log("Got user deatils");
        console.log(this);
    }
    // this is methods
}

console.log(user.getUserDetails());


