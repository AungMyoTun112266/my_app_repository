import { Request, Response } from 'express';
import { registerEmployee, fetchEmployeeById, modifyEmployee, removeEmployee } from '../services/employeeService';

// Controller to create a new employee
export const registerEmployeeController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const employee = await registerEmployee(req.body);
    return res.status(201).json(employee);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating employee' });
  }
};

// Controller to get an employee by ID
export const getEmployeeByIdController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const employee = await fetchEmployeeById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching employee' });
  }
};

// Controller to update an employee by ID
export const updateEmployeeController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const employee = await modifyEmployee(req.params.id, req.body);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating employee' });
  }
};

// Controller to delete an employee by ID
export const deleteEmployeeController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const employee = await removeEmployee(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    return res.status(200).json({ message: 'Employee deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting employee' });
  }
};
