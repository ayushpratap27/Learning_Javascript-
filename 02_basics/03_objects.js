// singleton
// Object.create

// Objects are created in two ways -> literals and constructor

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Ayush",
    "full name": "Ayush Pratap",
    [mySym]: "mykey1", // right way of defining symbol as key
    age: 18,
    location: "Jaipur",
    email: "ayush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ayush@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ayush@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());