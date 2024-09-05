import { createEmployee, getEmployeeById, updateEmployee, deleteEmployee } from '../repositories/employeeRepository';
import { IEmployee } from '../models/employeeModel';

// Service to create a new employee
export const registerEmployee = async (employeeData: Partial<IEmployee>): Promise<IEmployee> => {
  return await createEmployee(employeeData);
};

// Service to fetch an employee by ID
export const fetchEmployeeById = async (id: string): Promise<IEmployee | null> => {
  return await getEmployeeById(id);
};

// Service to update an employee by ID
export const modifyEmployee = async (id: string, employeeData: Partial<IEmployee>): Promise<IEmployee | null> => {
  return await updateEmployee(id, employeeData);
};

// Service to delete an employee by ID
export const removeEmployee = async (id: string): Promise<IEmployee | null> => {
  return await deleteEmployee(id);
};
