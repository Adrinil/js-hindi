// scope - global scope that is anything outside the function or if else statments or loop or anything outsdie the local scope or block scope .The function or the statemenst has their own scope ie block scopeor local scope.it can access the variables decalred outside their scope ie global scope but the opposite does not happen.


// A closure is when a function remembers variables from its outer (parent) scope, even after that outer function has finished executing.
// 🧠 Basic Idea:

// 👉 Inner function + access to outer variables = Closure

// both let and const are block scoped but var is not 

// var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 300
 
//     console.log("INNER: ", a);
    
// }

// console.log(a);
// // console.log(b);
// console.log(c);

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//      two()

// }

// one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
// }

// console.log(username);

// hoisting - Hoisting means JavaScript moves declarations to the top of their scope before code execution.

// 🧠 In One Line (Interview Ready):

// 👉 "Hoisting is JavaScript's default behavior of moving variable and function declarations to the top."

// console.log(c)

// var c = 100;  

// console.log(a)
// let a = 100

// console.log(b)
// const b = 200

// console.log(addTwoNumber(2,3))

// function addTwoNumber(num1,num2){
//     return num1+num2
// }

// console.log(addNumber(3))

// const addNumber = function(num){
//     return num +1
// }