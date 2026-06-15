let sti1 = true;

async function mostJunior() {
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
async function junior() {
    return new Promise((resolve, reject) => {
        if (sti2) {
            resolve("resolved from junior");
        }
        else {
            reject("rejected from junior");
        }
    })
}

let sti3 = true;
async function senior() {
    return new Promise((resolve, reject) => {
        if (sti3) {
            resolve("resolved from senior");
        }
        else {
            reject("rejected from senior");
        }
    })
}

async function main() {

    try {
        console.log(await mostJunior());
        console.log(await junior());
        console.log(await senior());
    }
    catch (error) {
        console.log(error);
    }

}

main();

let stimulator = true;

async function getUsersList() {

    return new Promise((resolve, reject) => {
        if (stimulator == true) {
            setTimeout(() => {
                resolve([{ id: 1, name: "Mr. Meow" }, { id: 2, name: "Mr. Tom" }, { id: 3, name: "Mr. Jerry" }])
            }, 5000);
        }
        else {
            reject("user not found");
        }
    })

}

function greetUser(userList) {

    for (let i = 0; i < userList.length; i++) {
        console.log(`welcome ${userList[i].name}`);
    }
}

async function main2() {
    try {
        const userList = await getUsersList();
        greetUser(userList);
    }
    catch (error) {
        console.log(error);
    }
}

main2();




