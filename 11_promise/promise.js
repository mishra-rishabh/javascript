/* Promise is an object that keeps track about whether a certain event has happened already or not. */
/* 3 stages of promise: pending, resolve, reject */

/* Promise resolved */
// promise produce
let promise = new Promise((resolve, reject) => {
    /* fetch roll numbers after 2 seconds */
    setTimeout(() => {
        let roll_num = [1, 2, 3, 4, 5, 6];
        resolve(roll_num);  // if promise is fulfilled
        // reject("Error while resolving promise");   // if promise is rejected
    }, 2000);
});

// promise consume
promise.then((roll_no) => {
    console.log(roll_no);
}).catch((error) => {
    console.log("Error: ", error);
});

/* Promise Rejected */
// promise produce
let anotherPromise = new Promise((resolve, reject) => {
    /* fetch roll numbers after 2 seconds */
    setTimeout(() => {
        let roll_num = [1, 2, 3, 4, 5, 6];
        // resolve(roll_num);  // if promise is fulfilled
        reject("Error while resolving promise");   // if promise is rejected
    }, 2000);
});

// promise consume
anotherPromise.then((roll_no) => {
    console.log(roll_no);
}).catch((error) => {
    console.log("Error: ", error);
});