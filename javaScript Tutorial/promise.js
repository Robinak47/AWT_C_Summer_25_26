let stimulator = false;

function testPromise() {
    return new Promise((resolve, reject) => {
        if (stimulator == true) {
            resolve("its resolved");
        }

        else {
            reject("its rejected");
        }
    })
}

const p = testPromise();
p.then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("it's finally end");
});