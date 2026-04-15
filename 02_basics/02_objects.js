// const obj1 = new Object()
// console.log(obj1)  object declaration and initialization by new keyword ie constructor method 

const jsUser = {}

jsUser.id = " 123abc"
jsUser.name = "Hitesh"
jsUser.email = "hitesh@gmail.com"
jsUser.isLoggedIn = false

console.log(jsUser.id)

// const regularUser = {
//     id : "123abcd",
//     name :{
//         fullName : {
//             firstName : "Hitesh",
//             lastName : "Chaudhary"
//         }
//     },

//     isLoggedIn : true
// }

// console.log(regularUser.name)
// console.log(regularUser.name.fullName.lastName)


// const new_arr = [
//     {
//         id:"a",
//         email:"adrinilsahoo10@gmail.com"

//     },
//     {
//         id:"b",
//         email:"alexrider314@gmail.com"

//     },
//     {
//         id:"c",
//         email : "adrnil10@gmail.com"

//     }
// ]

// console.log(new_arr[1].id)

// object concatenation

// const obj1 = {1:"a", 2: "b"}
// const obj2 = {3:"a",4 : "b"}
// const obj3 = {5 :"a",6 :"b"}

// const obj4 = {obj1,obj2}
// console.log(obj4)

// const obj4 = Object.assign({obj1},obj2,obj3)
// console.log(obj4)
// console.log(obj1)

// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4)

// const obj4 =  {...obj1, ...obj2, ...obj3}  => spread operator = ...
// console.log(obj4)

// const obj1 = {1:"a", 2: "b"}
// const obj2 = {2:"c",3 : "d"}
// const obj3 = {5 :"a",6 :"b"}

// const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4)   The properties are overwritten by other objects that have the same properties later in the parameters order.


// shallow copy - change in nested properties in the result object will also change it in the original or the source object.

const obj1 = {
    1: "a",
    2 :{
        3: "b"
    }
}
const obj4 = Object.assign({},obj1)
console.log(obj4);
 
obj4["2"]["3"]=  "c" ;
console.log(obj4)
console.log(obj1)




// object destructuring

const course = {
    courseName : "javascript",
    coursePrice : 0,
    courseInstructor : "Hitesh"

}
//  console.log(course.courseInstructor)

//  const {courseInstructor : instructor} = course
//  console.log(instructor)


console.log(Object.keys(jsUser))
console.log(Object.values(jsUser))
console.log(Object.entries(jsUser))


 //JSON 

 // {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
