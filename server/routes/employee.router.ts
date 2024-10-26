import { Router } from "express";
import { validateToken } from "../middleware/validateToken.handler"
import {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    loginEmployee,
    currentEmployee
} from "../controller/employee.controller"

const employeeRouter = Router();

employeeRouter.get("/", getAllEmployees);
employeeRouter.get("/:id", getEmployeeById);
employeeRouter.get("/current", currentEmployee);
employeeRouter.post("/", createEmployee);
employeeRouter.post("/login", loginEmployee);
employeeRouter.put("/:id", updateEmployee);
employeeRouter.delete("/:id", deleteEmployee);

export default employeeRouter;