// const tinderUser = new Object()  // This is singleton object
const tinderUser = {}   // This is non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ayush",
            lastname: "Pratap"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// Array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // Returns an array of keys
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));// Returns array of array and each subarray contains key-value pair

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    // To check whether property exists or not


// Object de-structure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Ayush"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {                                  // It does not have name so this is not object , this is JSON
//     "name": "Ayush",               // Here both key and its value is String
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

