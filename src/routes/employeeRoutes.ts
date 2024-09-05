import express from 'express';
import {
  registerEmployeeController,
  getEmployeeByIdController,
  updateEmployeeController,
  deleteEmployeeController,
} from '../controllers/employeeController';

const router = express.Router();

// Routes
router.post('/employees', registerEmployeeController); // Create a new employee
router.get('/employees/:id', getEmployeeByIdController); // Get an employee by ID
router.put('/employees/:id', updateEmployeeController); // Update an employee by ID
router.delete('/employees/:id', deleteEmployeeController); // Delete an employee by ID

export default router;
