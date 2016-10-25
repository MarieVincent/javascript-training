var x = {};
console.log('x', typeof x);

var john = {
    name : 'john',
    address : 'London',
    friend : {
        name : 'Jim',
        age : 12
    }
};

console.log("john's adress :", john.address);
console.log("John's friend's age :", john.friend.age);


var funkyCop = {
    name:'robocop'
};

var ennemy = {
    name : 'dick'
};

funkyCop.foe = ennemy;
console.log('funck', funkyCop);
ennemy.foe=funkyCop;
funkyCop.name="venere robocop";

console.log('ennemy', ennemy);
ennemy.dead = true;
console.log('ennemy :', ennemy);
delete  funkyCop.foe;
console.log('funky now :', funkyCop);