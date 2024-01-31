// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);    // 2 is converted into number
// console.log("02" > 1);

console.log(null > 0);  // o/p => false
console.log(null == 0); // o/p => false
console.log(null >= 0); // o/p => true

// The reason is that an equality check == and comparisons > < >= <= 
// work differently
// Comparison convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false

console.log(undefined == 0);    // o/p => false
console.log(undefined > 0);     // o/p => false
console.log(undefined < 0);     // o/p => false

// === checks strictly the both value as well as datatype

console.log("2" === 2);