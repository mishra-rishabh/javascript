/*  async/await is a special syntax to work with promises more comfortably.
    a function can be made asynchronous by using async keyword.
    once function is declared we await promise to get the result.
    async function always returns a promise.
*/
let promiseObj = new Promise((resolve, reject) => {
    setTimeout(() => {
        let someData = "I am a promise data";

        resolve(someData);
    }, 2000);
});

let promiseObj2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let someData = "I am a promise2 data";

        resolve(someData);
    }, 3000);
});

/* using try/catch block */
async function getData() {
    try {
        console.log("fetching promise data...");
        const promiseData = await promiseObj;

        console.log("fetching promise 2 data...");
        const promiseData2 = await promiseObj2;

        // console.log("promise data: ", promiseData);
        // console.log("promise data 2: ", promiseData2);

    return {
        promiseData,
        promiseData23333    // wrong variable name to execute catch block
    };
    } catch (error) {
        console.log("Error occurred: ", error);
    }
}

const data = getData().then((val) => {
    console.log(val);
});