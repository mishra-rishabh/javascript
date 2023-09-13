class Employee {
    constructor() {
        console.log("I am a constructor of Employee class");
    }

    login() {
        console.log("Employee has logged in");
    }

    requestLeave(leave) {
        console.log(`Employee has requested ${leave} leave(s)`);
    }
}

class Manager extends Employee {
    /* if there is no constructor in child class,
       javascript engine will create this default constructor automatically
    */
    /* constructor(...agrs) {
        super(...agrs);
    } */

    constructor(name) {
        // super();    // adding this will resolve the error
        console.log("I am constructor of Manager class " + name);    // this will give an error. we must call super constructor first
    }

    requestLeave(leave) {
        super.requestLeave(leave);
        console.log("one comp off");
    }
}

let mgr = new Manager();
// let mgr = new Manager("Rishabh");

mgr.login();
