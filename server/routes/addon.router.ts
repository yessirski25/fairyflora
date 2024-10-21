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
addonRouter.post("/", createAddon);
addonRouter.put("/:id", updateAddon);
addonRouter.delete("/:id", deleteAddon);

export default addonRouter;