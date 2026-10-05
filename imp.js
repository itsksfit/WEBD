/*
what is async?
what is await?
how async and await works behind the scenes?
examples of using async and await in JavaScript
Error handling with async and await
Interviews
async await vs promises.then/.catch
*/


/*

// async function always returns a promise. If the function returns a value, the promise will be resolved with that value. If the function throws an error, the promise will be rejected with that error.
async function getData() {
    //return "Namaste";
    return p; // output : promise resolved Value!
}
const dataPromise = getData();
console.log(dataPromise); // output Promise { 'Namaste' }     after promise creation: it will return promise resolved Value!
dataPromise.then((res) => console.log(res)); // output Namaste     promise resolved Value!

*/

// async and await is used to handle promises
// before async and await, we used to handle promises using .then() and .catch() methods.

/*function getData() {
    p.then((res) => console.log(res)) // output promise resolved Value!
}
getData();
*/


//promise creation
const p = new Promise((resolve, reject) => {
    resolve("promise resolved Value!");

})
// await can only be used inside an async function. It makes the code wait until the promise is resolved or rejected.
async function handlePromise(){
   const val = await p;
   console.log(val); // output promise resolved Value!
}
handlePromise();
