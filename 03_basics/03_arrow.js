const user = {          
    username: "Ayush",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   // (this) is user to refer current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // Current context - {} empty

// function chai(){
//     let username = "Ayush"
//     console.log(this.username);  // O/p => undefined
// }

// chai()

// const chai = function () {
//     let username = "Ayush"
//     console.log(this.username); // o/p => undefined
// }

const chai =  () => {
    let username = "Ayush"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                   // This is exlicit return where you have to use return keyword
// }

// const addTwo = (num1, num2) =>  num1 + num2      // This is known as implicit return 

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Ayush"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()