class RegistrationForm {
    /*  
        will be called each time when object is created.
        used to initialize the attributes of an object.
    */
    constructor(candidate_name) {
        console.log("constructor called for: ", candidate_name);

        this.name = candidate_name;
    }

    submitForm() {
        console.log(this.name + ": Your form has been submitted");
    }

    cancelRegistration() {
        console.log(this.name + ": Your registration has been cancelled!");
    }
}

// creating and initializing an object
let candidate_1 = new RegistrationForm("Rishabh");
let candidate_2 = new RegistrationForm("Akshay");

candidate_1.submitForm();

candidate_2.cancelRegistration();