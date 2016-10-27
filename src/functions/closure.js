var denver ={
    name : 'Denver',
    age : 12
}

var petitPied = {
    name: 'Petit pied',
    age : -6500000
}

function pure(a,b) {
    //a.age= 15; NOT PURE

    return a.age + b.age; //PURE : for somre input, will always return a value
}

console.log('pure :', pure(denver,petitPied));

function unpure() {
    //console.log ou screen() : will modify a stream
    //capture the external petitPied object
    //depends on external context, and not only params
    console.log('kick', petitPied.name);
    //a closure : to avoid
}
unpure;