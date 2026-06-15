function getUsersList() {
    let userList = [];
    setTimeout(() => {
        userList = [{ id: 1, name: "Mr. Meow" }, { id: 2, name: "Mr. Tom" }, { id: 3, name: "Mr. Jerry" }]
    }, 5000);

    return userList;
}

function greetUser() {
    const userList = getUsersList();
    for (let i = 0; i < userList.length; i++) {
        console.log(`welcome ${userList[i].name}`);
    }
}


greetUser();