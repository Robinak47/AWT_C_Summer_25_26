let stimulator = false;

function getUsersList() {

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


const p = getUsersList();
p.then((userList) => {
    greetUser(userList);
}).catch((error) => {
    console.log("error");
}).finally(() => {
    console.log("ended");
})