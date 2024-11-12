import { PrismaClient } from "@prisma/client";

const addonClient = new PrismaClient().addon;

//create addon
export const createAddon = async (req, res) => {

    const addonData = req.body;

    try {
        const addon = await addonClient.create({
            data: addonData,
        });

        res.status(200).json({ data: addon });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create this add-on"});
    }
}

//get all addons
export const getAllAddons = async (req, res) => {

    try {
        const addons = await addonClient.findMany();

        res.status(200).json({ data: addons });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "Failed to load all add-ons"});
    }
}

//get addon by id
export const getAddonById = async (req, res) => {

    const addonId = req.params;

    try {
        const addon = await addonClient.findUnique({
            where: {
                id: addonId,
            }
        });

        res.status(200).json({ data: addon });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "Failed to load this add-on"});
    }
}

//update addon 
export const updateAddon = async (req, res) => {

    const addonId = parseInt(req.params.id);
    const { addonName, addonPrice, transactionId } = req.body;

    try {
        const addon = await addonClient.update({
            where: {
                id: addonId,
            },
            data: {
                addonName,
                addonPrice,
                transactionId
            }
        });

        res.status(200).json({ data: addon });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update this add-on"});
    }
}

//delete addon 
export const deleteAddon = async (req, res) => {

    const addonId = parseInt(req.params.id);

    try {
        const addon = await addonClient.delete({
            where: {
                id: addonId,
            }
        });

        res.status(200).json({ data: addon });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete this add-on"});
    }
}