class Employee {
    login() {
        console.log("Employee has logged in");
    }

    logout() {
        console.log("Employee has logged out");
    }

    requestLeave(leave) {
        console.log(`Employee has requested ${leave} leave(s)`);
    }
}

class Manager extends Employee {
    requestDailyUpdates() {
        console.log("Manager has requested for daily updates");
    }

    /* 1st way of method overriding. not so efficient */
    /* requestLeave(leave) {
        console.log("Manager has requested " + leave + " leave(s");
    } */

    requestLeave(leave) {
        super.requestLeave(leave);
        console.log("one comp off");
    }
}

let emp = new Employee();
let mgr = new Manager();

emp.login();
emp.logout();
emp.requestLeave(6);

mgr.login();
mgr.requestDailyUpdates();
mgr.requestLeave(4);
mgr.logout();