


function junior(fn) {
    fn();
    console.log("junior");
}

junior(() => {
    console.log("most junior");
});

const arr = [1, 2, 3, 4, 5];

function odd(a) {
    return a % 2 != 0;
}

function even(a) {
    return a % 2 == 0;
}

function numbers(num, fn) {

    const odd = [];
    for (let i = 0; i < num.length; i++) {

        if (fn(num[i])) {
            odd.push(num[i]);
        }
    }
    return odd;
}

console.log(numbers(arr, odd));
console.log(numbers(arr, even));