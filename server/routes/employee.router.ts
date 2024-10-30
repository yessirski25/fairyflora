import { Router } from "express";
import { validateToken } from "../middleware/validateToken.handler"
import {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    loginEmployee,
    logoutEmployee,
    currentEmployee
} from "../controller/employee.controller"

const employeeRouter = Router();

employeeRouter.get("/", getAllEmployees);
employeeRouter.get("/current", validateToken, currentEmployee);
employeeRouter.get("/:id", getEmployeeById);
employeeRouter.post("/", createEmployee);
employeeRouter.put("/:id", updateEmployee);
employeeRouter.delete("/:id", deleteEmployee);
employeeRouter.post("/login", loginEmployee);
employeeRouter.post("/logout", logoutEmployee);

export default employeeRouter;