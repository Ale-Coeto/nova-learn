import { registeredUsers } from "./users";

export class DBService {
    initialized: boolean;
    constructor() {
        this.initialized = false;
    }

    async getUsers() {
        if (!this.initialized) {
            throw new Error('Service not initialized');
          } 
          return registeredUsers;
    }

    getUser = (username: string) => {
        return registeredUsers.find(user => user.username === username);
    }

}