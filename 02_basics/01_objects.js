const mySym = Symbol("mykey1")
// console.log(typeof(mySym)) => symbol

const user = {
    name : "hitesh",
    age  : 23,
    [mySym] : "key1",
    "full name" : "Hitesh Chaudhary",
    email :"hitesh@gmail.com",
    location : "Jaipur",
    isLoggedIn : false,
    lastLoginDays :["Friday","Saturday","Sunday"]
 
}

console.log(user)
//console.log(user.age)
//console.log(typeof(user.mySym))

// console.log(user["location"])
// console.log(user[mySym])
//  console.log(typeof(user[mySym]))
// console.log(typeof(user.isLoggedIn))
// console.log(typeof(user.lastLoginDays))
//console.log(user.lastLoginDays)

// user.email = "hiteshchatgpt@gmail.com"
// console.log(user.email)

// Object.freeze(user)

// user.email = "hitesh10@gmail.com"
// console.log(user.email)

user.greeting = function(){
    console.log(`welcome ${this.name}`);
}
// console.log(user.greeting())
user.greeting()


