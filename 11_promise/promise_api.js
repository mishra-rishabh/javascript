let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("some value for promise 1");
    }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("some value for promise 2");
    }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("some value for promise 3");     // uncomment this and comment reject statement to check Promise.all and Promise.allSettled
        reject(new Error("Error while resolving a promise 3"));
    }, 3000);
});

promise1.then((value) => {
    console.log("value: ", value);
});

promise2.then((value) => {
    console.log("value: ", value);
});

promise3.then((value) => {
    console.log("value: ", value);
});

/* instead of consumig promises like above, we can do it in a better way given below */
let promiseAll = Promise.all([promise1, promise2, promise3]);

// will return an array
/* if any of the promises got rejected then Promise.all() won't work, it will return an error.
   we use Promise.all() when we want all promises to be settled and then we consume it at once.
*/
promiseAll.then((value) => {
    console.log("promise all: ", value);
});

/* if we still want the result even if any of the promises got rejected then we have to use Promise.allSettled */
let promiseAllSettled = Promise.allSettled([promise1, promise2, promise3]);

// will return an array of objects with corresponding status and value
promiseAllSettled.then((value) => {
    console.log("promise all settled: ", value);
})
