
function mostJunior() {
    setTimeout(() => {
        console.log("most junior");
    }, 10000)

}

function junior(fn) {
    fn();
    setTimeout(() => {
        console.log("junior");
    }, 4000)
}

function senior(fn) {
    fn(mostJunior);
    setTimeout(() => {
        console.log("senior");
    }, 5000)
}


function mostSenior(fn) {
    fn(junior);
    setTimeout(() => {
        console.log("most senior");
    }, 1000)
}


mostSenior(senior);