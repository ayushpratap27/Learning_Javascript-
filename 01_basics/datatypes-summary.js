//  Primitive - It is called by value which means the copy of actual data is passed

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

// JavaScript is a dynamically typed language, which means that data types of 
// variables are determined by the value they hold at runtime and can change throughout the 
// program as we assign different values to them.

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // o/p => false, as symbols are unique

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ayush",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory type
// Stack (Primitive), Heap (Non-primitive)

// ***************Primitive*****************
let myYoutubename = "ayushpratapdot.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename); // o/p => ayushpratapdot.com because copy is passed 
console.log(anothername)    // o/p => chaiaurcode


//*************Non-Primitive**************
// call by reference

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "ayush@google.com"

console.log(userOne.email)  // o/p => ayush@google.com
console.log(userTwo.email)  // o/p => ayush@google.com because reference is passed