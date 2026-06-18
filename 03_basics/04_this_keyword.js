const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//here this refers to the object user and it gives us access to the properties of the object user. so this.username gives us access to the property username of the object user. and this.price gives us access to the property price of the object user.

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this); // {}// global object - window in browser and global in nodejs  
//  it gives us access to global scope and global variables and functions. 
// in browser the global object is window and in nodejs the global object is global.so this ===window in browser and this === global in nodejs

// in function in this case this === window and window has no property caled username which has local scope.and window can access properties of global scope but not local scope. so it gives undefined.
function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai()  // undefined 

const chai = function () {
    let username = "hitesh"
    console.log(this.username);
}// undefined

// in arrow function this is lexically scoped and it takes this from its parent scope which is global scope in this case. and in global scope this === window in browser and this === global in nodejs. so it gives undefined because window has no property called username which has local scope.
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai() // undefined 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()