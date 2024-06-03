const user = {          
    username: "Ayush",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   // (this) is used to refer current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // Current context - {} empty becuase this is in node environment
// In browser the global object is window

// function chai(){
//     let username = "Ayush"
//     console.log(this.username);  // O/p => undefined
// } // this is not used in function in this way

// chai()

// const chai = function () {
//     let username = "Ayush"
//     console.log(this.username); // o/p => undefined
// }


// Arrow function
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

const addTwo = (num1, num2) => ({username: "Ayush"}) // This syntax is used for returning objects


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()