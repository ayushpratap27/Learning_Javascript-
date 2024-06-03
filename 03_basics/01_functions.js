
function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

// sayMyName // - Reference of function
// sayMyName() // - Execution of function

// function addTwoNumbers(number1, number2){ // Jab function ki definition banate hain to
                                            // usme parameters pass krte hain
//     console.log(number1 + number2);
// }

const result1 = addTwoNumbers(3, 5)  // Jab function ko call krte hain tb usme arguments pass krte hain

// console.log("Result: ", result1); // o/p => undefined 

// Because console.log doesn't mean that the function is returning that value
// It is just printing that value, return is different concept


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  // Jab function ko call krte hain tb usme arguments pass krte hain

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ // default value
    if(!username){  // !username is equal to username === undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("Ayush") // This is not going to give any o/p because you just asked 
// to execute it
// console.log(loginUserMessage("Ayush"))

// Rest operator -> ...
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Ayush",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));