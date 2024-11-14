import { PrismaClient } from "@prisma/client";

const transactionClient = new PrismaClient().transaction;
const serviceClient = new PrismaClient().service;
const addonClient = new PrismaClient().addon;

//create transaction
export const createTransaction = async (req, res) => {
    const transactionData = req.body;

    try {
        const serviceIds = transactionData.laundryService.map(service => parseInt(service.id));
        const addonIds = transactionData.addon.map(addon => parseInt(addon.id));
        const customerId = parseInt(transactionData.customerId);

        const services = await serviceClient.findMany({
            where: {
                id: { in: transactionData.laundryService.map(service => service.id)}
            },
            select: {
                totalPrice: true
            }
        });

        const addons = await addonClient.findMany({
            where: {
                id: { in: transactionData.addon.map(addon => addon.id)}
            },
            select: {
                addonPrice: true
            }
        })

        const servicesPrice = services.reduce((sum, service) => sum + service.totalPrice, 0);
        const addonsPrice = addons.reduce((sum, addon) => sum + addon.addonPrice, 0);
        const totalPrice = servicesPrice + addonsPrice;

        const transaction = await transactionClient.create({
            data: {
                quantity: transactionData.quantity,
                price: totalPrice,
                customer: {
                    connect: { id: customerId }
                },
                laundryService: {
                    connect: serviceIds.map(id => ({ id }))
                },
                addon: {
                    connect: addonIds.map(id => ({ id }))
                }
            }
        });

        res.status(200).json({ data: transaction });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create this transaction"});
    }
}

//get all transactions
export const getAllTransactions = async (req, res) => {
    try {
        const transaction = await transactionClient.findMany();

        res.status(200).json({ data: transaction});
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