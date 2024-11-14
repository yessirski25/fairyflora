import { PrismaClient } from "@prisma/client";

const customerClient = new PrismaClient().customer;

//create customer 
export const createCustomer = async (req, res) => {
    const customerData = req.body;

    try {
        const customer = await customerClient.create({
            data: customerData
        });

        res.status(200).json({ data: customer});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create customer!"});
    }
}

//get all customers 
export const getAllCustomers = async (req, res) => {
    try {
        const customer = await customerClient.findMany();

        res.status(200).json({ data: customer});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch all customers!"});
    }
}

//get customer by id 
export const getCustomerById = async (req, res) => {
    const customerId = req.params;

    try {
        const customer = await customerClient.findUnique({
            where: {
                id: customerId
            }
        });

        res.status(200).json({ data: customer});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch this customer!"});
    }
}

//udpate customer  
export const updateCustomer = async (req, res) => {
    const customerId = parseInt(req.params.id);
    const { customerName, customerContact, transactions } = req.body;

    try {
        const customer = await customerClient.update({
            where: {
                id: customerId
            }, 
            data: {
                customerName,
                customerContact,
                transactions
            }
        });

        res.status(200).json({ data: customer});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update this customer!"});
    }
}

//delete customer  
export const deleteCustomer = async (req, res) => {
    const customerId = parseInt(req.params.id);

    try {
        const customer = await customerClient.delete({
            where: {
                id: customerId
            }
        });

        res.status(200).json({ data: customer});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update this customer!"});
    }
}