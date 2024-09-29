//ES 6

class user{
    constructor(username , email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abcd`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const u1 = new user("somu","somu@gmail.com", 123)
console.log(u1.encryptPassword());
console.log(u1.changeUsername());


