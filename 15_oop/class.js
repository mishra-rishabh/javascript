class RegistrationForm {
    fillForm(name) {
        this.name = name;
    }

    submitForm() {
        console.log(this.name + ": Your form has been submitted");
    }

    cancelRegistration() {
        console.log(this.name + ": Your registration has been cancelled!");
    }
}

// creating an object
let candidate_1 = new RegistrationForm();
let candidate_2 = new RegistrationForm();

candidate_1.fillForm("Rishabh");
candidate_1.submitForm();

candidate_2.fillForm("Naveen");
candidate_2.cancelRegistration();