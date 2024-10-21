import { PrismaClient } from "@prisma/client";

const inventoryClient = new PrismaClient().inventory;

//create inventory
export const createInventory = async (req, res) => {
    const inventoryData = req.body;

    try {
        const inventory = await inventoryClient.create({
            data: inventoryData
        });

        res.status(200).json({ data: inventory});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create this inventory!"});
    }
}

//get all inventories
export const getAllInventories = async (req, res) => {

    try {
        const inventory = await inventoryClient.findMany();

        res.status(200).json({ data: inventory});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create this inventory!"});
    }
}

//get inventory by Id
export const getInventoryById = async (req, res) => {

    const inventoryId = req.params;

    try {
        const inventory = await inventoryClient.findUnique({
            where: {
                id: inventoryId
            }
        });

        res.status(200).json({ data: inventory});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create this inventory!"});
    }
}

//updateInventory
export const updateInventory = async (req, res) => {

    const inventoryId = req.params;
    const { branchInventoryId, arielPowder, downyFabcon, zonrox } = req.body;

    try {
        const inventory = await inventoryClient.update({
            where: {
                id: inventoryId
            }, 
            data: {
                branchInventoryId, 
                arielPowder, 
                downyFabcon, 
                zonrox
            }
        });

        res.status(200).json({ data: inventory});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update this inventory!"});
    }
}

//updateInventory
export const deleteInventory = async (req, res) => {

    const inventoryId = req.params;

    try {
        const inventory = await inventoryClient.delete({
            where: {
                id: inventoryId
            }
        });

        res.status(200).json({ data: inventory});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete this inventory!"});
    }
}