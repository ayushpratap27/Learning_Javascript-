// Dates

let myDate = new Date()
// console.log(myDate.toString()); // o/p=> Sun Jun 02 2024 09:03:28 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sun Jun 02 2024
// console.log(myDate.toISOString()); // 2024-06-02T03:35:01.383Z
// console.log(myDate.toJSON()); // 2024-06-02T03:35:35.171Z
// console.log(myDate.toLocaleDateString()); // 6/2/2024
// console.log(myDate.toLocaleString()); // 6/2/2024, 9:06:35 AM
// console.log(typeof myDate);   // o/p => object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

