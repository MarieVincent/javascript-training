/**
 * *Note that there is a Uppercase
 * It's just a covnention
 */


function Dinosaurus(name) {
    this.size = 12;
    this.name = name;
}

Dinosaurus.prototype.age = -65000000;

const denver = new Dinosaurus('Denver');
//new give access to a prototype

const petitPied = new Dinosaurus('Petit Pied');
petitPied.size = 3;

console.log("Denver's name :", denver.name);
console.log('denver age :', denver.age);
console.log('Petit Pied age :', petitPied.age);

function TRex() {
    this.name = 'Rex';
}

function Carnivore() {
}
Carnivore.prototype.eat = function (obj) {
    console.log(this.name + ' eats ' + obj.name);
}

//TRex.prototype = Dinosaurus.prototype;
//TRex.prototype = Carnivore.prototype;

Object.assign(TRex.prototype,Dinosaurus.prototype);
Object.assign(TRex.prototype,Carnivore.prototype);

const rex = new TRex();
 rex.eat(petitPied);

