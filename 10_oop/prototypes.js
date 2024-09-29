let myName = "Somu     "

// console.log(myName.length); //it will count the spaces also
// console.log(myName.trim().length);

// console.log(myName.truelength);

let arr = ["thor", "spiderman", "ironmam", "batman"]

let heropower = {
    thor : "hammer",
    spiderman : "spider",

    getSpiderPower : function(){
        console.log(`Spidy power is : ${this.spiderman}`);
        
    }
}

Object.prototype.somu = function(){
    console.log(`somu is present in all obejcts`);
    
}

heropower.somu()


//inheritence  //this is the old way
const user = {
    username : "somu",
    email : "somu@gmail.com"
}

const teacher = {
    makeVideo : true
}

const teacherSupport = {
    isAvailable : true
}

const TaSupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__ : teacherSupport
}

teacher.__proto__ = user

//moder structure (syntax)

Object.setPrototypeOf(TaSupport, teacher)

///////////////////////
let anotherusername = "somu            "
String.prototype.trueLength = function(){
    console.log(`true lenth is : ${this.trim().length}`);
}

anotherusername.trueLength()