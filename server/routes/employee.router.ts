import { Router } from "express";

import {
    getAllEmployees,
    getEmployeeById
} from "../controller/employee.controller"

const employeeRouter = Router();

employeeRouter.get("/", getAllEmployees);
employeeRouter.get("/:id", getEmployeeById);

export default employeeRouter;