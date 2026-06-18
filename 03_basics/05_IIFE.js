// Immediately invoked function expressions (IIFEs) are a common JavaScript pattern that allows you to create a new scope and execute code immediately. This is often used to avoid polluting the global namespace and to create private variables.


(function chai(){
    // NAMED IIFE

    console.log("hello DB CONNECTED");
})();

((name) =>{
    console.log(`my name is ${name}`);

})('hitesh');

