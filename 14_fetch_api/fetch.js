let url = "https://api.breakingbadquotes.xyz/v1/quotes";
let promise = fetch(url);

promise.then((response) => {
    console.log("status: ", response.status);
    console.log("ok: ", response.ok);
    
    return response.json();
}).then((value) => {
    console.log("final response: ", value);
});