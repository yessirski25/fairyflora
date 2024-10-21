import { Router } from "express";
import {
    getAllTransactions,
    getTransactionById,
    createTransaction,
    updateTransaction,
    deleteTransaction
} from "../controller/transaction.controller";

const transactionRouter = Router();

transactionRouter.get("/", getAllTransactions);
transactionRouter.get("/:id", getTransactionById);
transactionRouter.post("/", createTransaction);
transactionRouter.put("/:id", updateTransaction);
transactionRouter.delete("/:id", deleteTransaction);

export default transactionRouter;