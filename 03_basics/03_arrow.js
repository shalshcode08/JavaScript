const user = {
    username : "somu",
    price : 999,
    welcomeMessage : function (){
        console.log(`${this.username} welcome to the website`); //this is use to reffer current contex
        
    }
}

//arrow function
// function hlo () {
//     let username = "somu"
//     console.log(this.username); //this only works in objects cannot be used in function
// }

// hlo()

const hlo = () => {
    let username = "somu"
    console.log(this.username);
    
}
// hlo();
