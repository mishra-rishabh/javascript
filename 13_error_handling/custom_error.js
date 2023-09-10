try {
    let age = 10;

    if(age < 18) {
        throw new Error('Bro you are not an adult!');
    }
} catch (error) {
    // error is an object
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}