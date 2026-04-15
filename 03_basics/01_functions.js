// function sayMyName(){
//     console.log("H")
//     console.log("I")
//     console.log("T")
//     console.log("E")
//     console.log("S")
//     console.log("H")

// }

// sayMyName()


// function addTwoNumber(num1,num2){

//     console.log(num1+num2)
 
// }

// addTwoNumber(2,3)



// function addTwoNumber(num1,num2){

//     // const result = num1+num2
//     // return result

//     return result
 
// }

// console.log(addTwoNumber(2,3))

// function userLogInMessage(user = "Adrinil"){

//     if(!user){
//         console.log("Please enter your name")
//         return
//     }
//     return `Welcome, ${user}`

// }
// console.log(userLogInMessage())

// function taking object as a parameter

 const user = {
    name:"hitesh",
    id:"123abc",
    email :"hitesh@gmail.com"
 }

 const userLogInMessage = function(anyObject){
    console.log(`Welcome, ${anyObject.name} with id ${anyObject.id} having email ${anyObject.email}`)
 }
// userLogInMessage(user)

userLogInMessage({
    name:"adrinil",
    email:"adrinil10@gmail.com"
})

//passing array as arguments

const new_array = [100,200,300]

function secondElementValue(arr){
   return arr[1]

}
// console.log(secondElementValue(new_array))
console.log(secondElementValue([100,300,320])
)



