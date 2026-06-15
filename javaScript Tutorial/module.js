
export default function sum(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function multiplication(a, b) {
    return a * b;
}

export function div(a, b) {
    return a / b;
}

function sayMeow() {
    console.log("meow");
}

function sayBye() {
    console.log("Bye");
}

const pi = 3.1416;


export { sayMeow as sM, sayBye as sB, pi };