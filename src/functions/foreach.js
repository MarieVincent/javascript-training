var users = require('../data').users;

users.forEach(function (user) {
    console.log('user name', user.name);
});

console.log('#####');
users.forEach(user => console.log('user name', user.name));
//not very good, because there is not a result, or that's what we attend with a fat arrow

var admins = [];
users.forEach(function (user) {
    if (user.admin === true){
        admins.push(user.name);
    }
});
console.log('admins', admins);