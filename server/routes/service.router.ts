import { Router } from "express";
import {
    createService,
    getAllServices,
    getServiceById,
    updateService,
    deleteService
} from "../controller/service.controller";

const serviceRouter = Router();

serviceRouter.get("/", getAllServices);
serviceRouter.get("/:id", getServiceById);
serviceRouter.post("/", createService);
serviceRouter.put("/:id", updateService);
serviceRouter.delete("/:id", deleteService);

export default serviceRouter;