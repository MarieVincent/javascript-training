
console.log('2+3', add(2,3));

//variable can't be under the consol.log
var mult = function (a,b) {
    return a*b;
}
console.log('4*3 :', mult(4,3));

// function can be at the bottom
function add(a,b) {
    return a+b;
}

var divide =  (a,b) =>  a/b;
console.log('6/3',divide(6,3));