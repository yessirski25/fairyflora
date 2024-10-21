import { Router } from "express";

import {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from "../controller/employee.controller"

const employeeRouter = Router();

employeeRouter.get("/", getAllEmployees);
employeeRouter.get("/:id", getEmployeeById);
employeeRouter.post("/", createEmployee);
employeeRouter.put("/:id", updateEmployee);
employeeRouter.delete("/:id", deleteEmployee);

export default employeeRouter;