let sti1 = false;

function mostJunior() {
    return new Promise((resolve, reject) => {
        if (sti1) {
            resolve("resolved from most junior");
        }
        else {
            reject("rejected from most junior");
        }
    })
}

let sti2 = true;
function junior() {
    return new Promise((resolve, reject) => {
        if (sti2) {
            resolve("resolved from junior");
        }
        else {
            reject("rejected from junior");
        }
    })
}

let sti3 = false;
function senior() {
    return new Promise((resolve, reject) => {
        if (sti3) {
            resolve("resolved from senior");
        }
        else {
            reject("rejected from senior");
        }
    })
}

const p = mostJunior();
p.then((msg) => {
    console.log(msg);
    return junior();
}).then((msg) => {
    console.log(msg);
    return senior();
}).then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("ended");
})


let sti4 = true;
function sum(a, b) {
    return new Promise((resolve, reject) => {
        if (sti4) {
            resolve(a + b);

        }

        else {
            reject("error");
        }


    })
}


function sub(val) {
    console.log(val - 10);
}


const p2 = sum(100, 200);
p2.then((val) => { sub(val) }).catch((error) => {
    console.log(error);
})