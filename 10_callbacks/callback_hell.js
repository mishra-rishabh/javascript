/*  Callback hell or pyramid of doom makes the code very difficult to understand and maintain.
    It happens when there are multiple/nested callbacks within a function.
*/

function nextTask(callback) {
    setTimeout(() => {
        callback();
    }, 3000);
}

function someTask() {
    setTimeout(() => {
        console.log("Task 1 completed!");
        nextTask(() => {
            setTimeout(() => {
            console.log("Task 2 completed!");
            nextTask(() => {
                setTimeout(() => {
                    console.log("Task 3 completed!");
                    nextTask(() => {
                        setTimeout(() => {
                            console.log("Task 4 completed!");
                        }, 3000);
                    });
                }, 3000);
            });
            }, 3000);
        });
    }, 3000);
}

someTask();