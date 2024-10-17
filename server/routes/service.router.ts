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
serviceRouter.post("/create", createService);
serviceRouter.put("/:id/update", updateService);
serviceRouter.delete("/:id/delete", deleteService);

export default serviceRouter;