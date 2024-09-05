import { createUser, getUserById, updateUser, deleteUser } from '../repositories/userRepository';
import { IUser } from '../models/userModel';

// Register a new user
export const registerUser = async (userData: Partial<IUser>): Promise<IUser> => {
  return await createUser(userData);
};

// Fetch a user by ID
export const fetchUserById = async (id: string): Promise<IUser | null> => {
  return await getUserById(id);
};

// Update a user
export const modifyUser = async (id: string, userData: Partial<IUser>): Promise<IUser | null> => {
  return await updateUser(id, userData);
};

// Delete a user
export const removeUser = async (id: string): Promise<IUser | null> => {
  return await deleteUser(id);
};
