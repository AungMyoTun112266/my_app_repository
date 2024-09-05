import { User } from '../models/userModel';

export class UserRepository {
    private users: User[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ];

    public findAll(): User[] {
        return this.users;
    }

    public findById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    async save(user: User): Promise<User> {
        // Simulate saving by adding to the array
        this.users.push(user);
        return user;
    }
}
