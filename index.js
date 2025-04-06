import { User, fetchUsers, userMap } from './tools.js';

async function init() {
    console.log('Fetching users...');

   
    const usersData = await fetchUsers();

   
    usersData.forEach(userData => {
        const user = new User(userData.name, userData.role);
        userMap.set(userData.name, user);
    });

 
    console.log(userMap.get('Lacie').getRole()); // Alice is an Admin
    console.log(userMap.get('Bob').getRole());   // Bob is an Editor
}

init();

