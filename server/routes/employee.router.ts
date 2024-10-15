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
employeeRouter.post("/create", createEmployee);
employeeRouter.put("/:id/update", updateEmployee);
employeeRouter.delete("/:id/delete", deleteEmployee);

export default employeeRouter;