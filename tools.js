export class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    getRole() {
        return `${this.name} is a ${this.role}`;
    }
}


export async function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { name: 'Alice', role: 'Admin' },
                { name: 'Bob', role: 'Editor' }
            ]);
        }, 2000); 
    });
}


export const userMap = new Map();
