function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2

// console.log(multiplyBy5(4))
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype)


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`the score is : ${this.score}`);
    
}

const c1 = new createUser("somu", 20);
const c2 = new createUser("shrestha", 220)

c1.printMe()