import { Router } from "express";
import {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
} from "../controller/customer.controller";

const customerRouter = Router();

customerRouter.get("/", getAllCustomers);
customerRouter.get("/:id", getCustomerById);
customerRouter.post("/:id", createCustomer);
customerRouter.put("/:id", updateCustomer);
customerRouter.delete("/:id", deleteCustomer);

export default customerRouter;