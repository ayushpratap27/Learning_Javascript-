//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// Global scope in browser using console is different from that using node in windows

// console.log(a);
// console.log(b);
// console.log(c);


// Child function can access variables of parent function but vice versa is not possible
function one(){
    const username = "Ayush"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "Ayush"
    if (username === "Ayush") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)  // This is going to give error, this syntax of function declaration doesn't allow to access before initialization
const addTwo = function(num){ // Sometimes this declaration of function is known as expression
    return num + 2
}
