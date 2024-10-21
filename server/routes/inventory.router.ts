import { Router } from "express";
import {
    createInventory,
    getAllInventories,
    getInventoryById,
    updateInventory,
    deleteInventory
} from "../controller/inventory.controller";

const inventoryRouter = Router();

inventoryRouter.get("/", getAllInventories);
inventoryRouter.get("/:", getInventoryById);
inventoryRouter.post("/", createInventory);
inventoryRouter.put("/:", updateInventory);
inventoryRouter.delete("/:", deleteInventory);

export default inventoryRouter;