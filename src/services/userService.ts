import { validate } from 'class-validator';
import { User } from '../models/userModel';
import { UserRepository } from '../repositories/userRepository';

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public getAllUsers(): User[] {
        return this.userRepository.findAll();
    }

    public getUserById(id: number): User | undefined {
        return this.userRepository.findById(id);
    }

    public async createUser(userData: User): Promise<User>{

        console.log(userData)

        const user = new User(userData.id,userData.name,userData.email);

        console.log(user)
        const errors =await validate(user);
        if (errors.length > 0) {
            // Optionally format the errors
            throw new Error(`Validation failed: ${errors.map(err => Object.values(err.constraints ?? {})).join(', ')}`);
        }
        return this.userRepository.save(user);
    }


}
