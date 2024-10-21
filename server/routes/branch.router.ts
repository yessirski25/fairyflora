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
branchRouter.post("/", createBranch);
branchRouter.put("/:id", updateBranch);
branchRouter.delete("/:id", deleteBranch);

export default branchRouter;