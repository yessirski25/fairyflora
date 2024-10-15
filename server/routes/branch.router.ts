import { Router } from "express";
import {
    createBranch,
    getAllBranches,
    getBranchById,
    updateBranch,
    deleteBranch
} from "../controller/branch.controller"

const branchRouter = Router();

branchRouter.get("/", getAllBranches);
branchRouter.get("/:id", getBranchById);
branchRouter.post("/create", createBranch);
branchRouter.put("/:id/update", updateBranch);
branchRouter.delete("/:id/delete", deleteBranch);

export default branchRouter;