const arr = [1, 2, 4];
console.log(arr.push("meow"));
console.log(arr.unshift("web tech"));
console.log(arr.unshift({ id: "123", name: "meow" }));
console.log(arr);

console.log(arr.length);

console.log("after deletion");
console.log(arr.pop());
console.log(arr.shift());
console.log(arr);


//map method
//array transformation

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.map(element => element * 2));
console.log(arr2);


//filter method
console.log(arr2.filter(element => element > 2));
console.log(arr2);

//array reduce method
console.log(arr2.reduce((acc, current) => acc + current, 0));

//find method
console.log(arr2.findIndex(element => element == 2));

//real life use case
const products = [{ pCode: "p-300", price: 200, isAvailable: true }, { pCode: "p-400", price: 300, isAvailable: false }, { pCode: "p-500", price: 400, isAvailable: true }];

console.log(products.filter(product => product.isAvailable == true));
console.log(products.reduce((acc, cur) => acc + cur.price, 0));