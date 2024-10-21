import { PrismaClient } from "@prisma/client";

const transactionClient = new PrismaClient().transaction;

//create transaction
export const createTransaction = async (req, res) => {
    const transactionData = req.body;

    try {
        const transaction = await transactionClient.create({
            data: transactionData
        });

        res.status(200).json({ message: "Transaction successfully created"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create this transaction"});
    }
}

//get all transactions
export const getAllTransactions = async (req, res) => {
    try {
        const transaction = await transactionClient.findMany();

        res.status(200).json({ message: transaction});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch all transactions!"});
    }
}

//get transaction by id
export const getTransactionById = async (req, res) => {
    const transactionId = req.params;

    try {
        const transaction = await transactionClient.findUnique({
            where: {
                id: transactionId
            }
        });

        res.status(200).json({ message: transaction});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch all transactions!"});
    }
}

//update transaction
export const updateTransaction = async (req, res) => {
    const transactionId = req.params;
    const { laundryService, quantity, price, addon, customerId } = req.body;
    try {
        const transaction = await transactionClient.update({
            where : {
                id: transactionId,
            },
            data: {
                laundryService,
                quantity,
                price,
                addon,
                customerId
            }
        });

        res.status(200).json({ message: transaction});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update this transaction!"});
    }
}

//delete transaction
export const deleteTransaction = async (req, res) => {
    const transactionId = req.params;

    try {
        const transaction = await transactionClient.delete({
            where: {
                id: transactionId
            },
        });

        res.status(200).json({ message: transaction});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete this transaction!"});
    }
}