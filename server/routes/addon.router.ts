import { Router } from "express";
import {
    createAddon,
    getAllAddons,
    getAddonById,
    updateAddon,
    deleteAddon
} from "../controller/addon.controller";

const addonRouter = Router();

addonRouter.get("/", getAllAddons);
addonRouter.get("/:id", getAddonById);
addonRouter.post("/create", createAddon);
addonRouter.put("/:id/update", updateAddon);
addonRouter.delete("/:id/delete", deleteAddon);

export default addonRouter;