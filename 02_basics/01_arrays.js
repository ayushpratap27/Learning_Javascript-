// array - Js arrays are resizable and can contain a mix of different data types
// Js array-copy operations create shallow copies.
// Shallow copy of an object is a copy whose properties share the same
// references as those of the source object from which the copy was made.


const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//********************* Array methods *************************

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));  // It checks whether 9 exists or not
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // It converts array to string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // Returns a copy of section of an array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// Difference between slice and splice
// Slice doesn't include the end of range and there is no change in array
// Splice include the end of range and the portion of splice is removed from actual array
 