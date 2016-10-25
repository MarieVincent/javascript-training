var x = [2, 8, 6, 4, 32, 75, -3, 34, 15];

var sortFunction = function (a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
};

console.log('array sorted', x.sort(sortFunction));

var users = require('../data').users; //function require is link to node, very specific
console.log('users',users);


function sortUsers(user1, user2) {
    if (user1.name === user2.name) {
        return 0;
    }
    return user1.name<user2.name ? -1 : 1;
    };
    console.log('users sorted', users.sort(sortUsers));

console.log("users's names", users.map(user =>user.name));