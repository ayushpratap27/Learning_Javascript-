// Immediately Invoked Function Expressions (IIFE)

// We use IIFE to get rid of the pollution of global variable

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                               // use semi colon here

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('Ayush')

