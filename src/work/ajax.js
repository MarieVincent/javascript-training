$.get('http://localhost:3000/api/users/', function (users) {
    console.log('receive users', users);
    // const user = $('<p>').text(users.map (user => user.name));
    //$('section.users').append(user);
   /* users.sort(function (user1, user2) {
        if (user1.name < user2.name) {
            return -1;
        } else if (user1.name > user2.name) {
            return 1;
        }
        return 0;
    });*/
   users.sort((user1, user2)=>user1.name<user2.name ? -1 : 1);
    displayUsers(users);
});

function displayUsers(users) {
    const block = $('<ul>');
    users.forEach(function (user) {
        const pUser = $('<li>').text(user.name);
        block.append(pUser);
    });
    $('section.users').append(block);
}


$.get('http://localhost:3000/api/users/admins/', function (admins) {
    console.log('receive admin', admins);
});

$.get('http://localhost:3000/api/users/admins/', function (admins) {
    console.log('receive admin', admins.map(admin => admin.name));
});