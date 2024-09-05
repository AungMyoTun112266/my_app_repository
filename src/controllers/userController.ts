import { Request, Response } from 'express';
import { registerUser, fetchUserById, modifyUser, removeUser } from '../services/userService';
import { IUser } from '../models/userModel'; // Import IUser interface

// Create a new user
export const createUserController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userData: Partial<IUser> = req.body; // Ensure user data is of type IUser
    const newUser = await registerUser(userData);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

// Get user by ID
export const getUserByIdController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = req.params.id;
    console.log("userId ",userId)
    const user = await fetchUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

// Update user by ID
export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = req.params.id;
    const userData: Partial<IUser> = req.body;
    const updatedUser = await modifyUser(userId, userData);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

// Delete user by ID
export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = req.params.id;
    const deletedUser = await removeUser(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};
