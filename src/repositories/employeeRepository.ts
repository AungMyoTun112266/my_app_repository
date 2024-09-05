import Employee, { IEmployee } from '../models/employeeModel';

// Create a new employee
export const createEmployee = async (employeeData: Partial<IEmployee>): Promise<IEmployee> => {
  const employee = new Employee(employeeData);
  return await employee.save();
};

// Get an employee by ID
export const getEmployeeById = async (id: string): Promise<IEmployee | null> => {
  return await Employee.findById(id);
};

// Update an employee by ID
export const updateEmployee = async (id: string, employeeData: Partial<IEmployee>): Promise<IEmployee | null> => {
  return await Employee.findByIdAndUpdate(id, employeeData, { new: true });
};

// Delete an employee by ID
export const deleteEmployee = async (id: string): Promise<IEmployee | null> => {
  return await Employee.findByIdAndDelete(id);
};
