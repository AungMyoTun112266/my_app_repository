import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public getAllUsers = (_req:Request,res: Response): void => {
        const users = this.userService.getAllUsers();
        res.json(users);
    };

    public getUserById = (req: Request, res: Response): void => {
        const userId = parseInt(req.params.id, 10);
        const user = this.userService.getUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    };
    public createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = req.body;

            // Ensure that user data conforms to expected format
            if (!user.id || !user.name || !user.email) {
                res.status(400).json({ message: 'Invalid user data' });
                return;
            }

            // Create a user using the service
            const createdUser = await this.userService.createUser(user);
            res.status(201).json(createdUser);
        } catch (error) {
            // TypeScript specific error handling
            if (error instanceof Error) {
                // Ensure the error has a message property
                res.status(400).json({ message: 'Error creating user', error: error.message });
            } else {
                // Handle unexpected errors
                res.status(500).json({ message: 'Internal server error' });
            }
        }
    };
}
