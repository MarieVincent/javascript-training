function Dinosaurus(name) {
    this.size = 12;
    this.name = name;
}

Dinosaurus.prototype.age = -65000000;
Dinosaurus.prototype.size = 20;

const denver = new Dinosaurus('Denver');
//new give access to a prototype

const petitPied = new Dinosaurus('Petit Pied');

console.log('denver size', denver.size);
//console.log('denver prototype size', denver.prototype.size);//denver est un objet et un objet n'a pas de prototype.
denver.size=150;
console.log('new denver size :',denver.size);

