import User from '../models/userModel';
import { IUser } from '../models/userModel';


export const createUser = async (userData: Partial<IUser>) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    console.log("Exception")
    console.log(error)
    throw new Error('Error creating user');
  }
};

export const getUserById = async (id: string) => {
  try {
    return await User.findById(id);
  } catch (error) {
    console.log("Exception ",error)
    throw new Error('Error fetching user ');
  }
};

export const updateUser = async (id: string, userData: Partial<IUser>) => {
  try {
    return await User.findByIdAndUpdate(id, userData, { new: true });
  } catch (error) {
    throw new Error('Error updating user');
  }
};

export const deleteUser = async (id: string) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting user');
  }
};
