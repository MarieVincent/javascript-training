function add(a, b) {
    return a + b;
}
console.log('2 +3 =', add(2, 3));

function divide(a, b) {
    return a / b;
}
console.log('6/3 =', divide(6, 3));

function multiply(a, b) {
    return a * b;
}
console.log('2*6 :', multiply(2, 6));


function minus(a, b) {
    return a - b;
}
console.log('6-3', minus(6, 3));


function operation(op, x, y) {
    return op(x, y);
}
console.log('multpiply', operation(multiply, 56, 59));


var ops = [add, divide, multiply, minus];
var random= ops[Math.floor(Math.random() * ops.length)];
console.log('?', operation(random, 56, 59));