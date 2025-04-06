import { User, fetchUsers, userMap } from './tools.js';

async function init() {
    console.log('Fetching users...');

    // Fetch users asynchronously
    const usersData = await fetchUsers();

    // Store users in the Map
    usersData.forEach(userData => {
        const user = new User(userData.name, userData.role);
        userMap.set(userData.name, user);
    });

    // Test Map Storage
    console.log(userMap.get('Lacie').getRole()); // Alice is an Admin
    console.log(userMap.get('Bob').getRole());   // Bob is an Editor
}

init();
