import { PrismaClient } from "@prisma/client";

const branchClient = new PrismaClient().branch;

//create branch
export const createBranch = async (req, res) => {
    
    const branchData = req.body;

    try {
        const branch = await branchClient.create({
            data: branchData,
        });

        res.status(200).json({ data: branch });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create this branch!"});
    }
}   

//get all branches
export const getAllBranches = async (req, res) => {

    try {
        const allBranches = await branchClient.findMany();

        res.status(200).json({ data: allBranches });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to load all branches"});
    }
}   

//get branch by ID
export const getBranchById = async (req, res) => {

    const branchId = req.params;

    try {
        const branch = await branchClient.findUnique({
            where: {
                id: branchId,
            }
        });

        res.status(200).json({ data: branch });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to load this specific branch!"});
    }
}   

//get branch by ID
export const updateBranch = async (req, res) => {

    const branchId = req.params;
    const { barangay, municipality, province, openingTime, closingTime, emailAddress, assignEmployee, dateEstablish, inventories } = req.body;

    try {
        const branch = await branchClient.update({
            where: {
                id: branchId,
            },
            data: {
                barangay, 
                municipality, 
                province, 
                openingTime, 
                closingTime, 
                emailAddress, 
                assignEmployee, 
                dateEstablish, 
                inventories
            }
        });

        res.status(200).json({ message: "This branch was updated successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update this specific branch!"});
    }
}   

//get branch by ID
export const deleteBranch = async (req, res) => {

    const branchId = req.params;

    try {
        const branch = await branchClient.delete({
            where: {
                id: branchId,
            }
        });

        res.status(200).json({ message: "This branch was deleted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete this specific branch!"});
    }
}   