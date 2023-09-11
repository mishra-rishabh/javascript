const myPostRequest = async (obj) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj),
    }

    let promise = await fetch("https://jsonplaceholder.typicode.com/posts", options);

    let response = await promise.json();

    return response;
};

const getObj = async (id) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    let responseData = await response.json();

    return responseData;
}

const callingFunction = async () => {
    let bodyObj = {
        name: "Rishabh Mishra",
        profession: "Blockchain Developer",
        age: 27
    };

    let postRequest = await myPostRequest(bodyObj);
    console.log("my post request: ", postRequest);

    let getRequest = await getObj(6);
    console.log("get request: ", getRequest);
}

callingFunction();


/* https://jsonplaceholder.typicode.com/
   Free fake API for testing and prototyping.
*/