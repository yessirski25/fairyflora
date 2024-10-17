import { PrismaClient } from "@prisma/client";

const serviceClient = new PrismaClient().service;

//create service
export const createService = async (req, res) => {

    const serviceData = req.body;

    try {
        const service = await serviceClient.create({
            data: serviceData,
        });

        res.status(200).json({ data: service });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Service creation was unsuccessful!"});
    }
}

//get all services
export const getAllServices = async (req, res) => {

    try {
        const services = await serviceClient.findMany();

        res.status(200).json({ data: services });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to load existing services!"});
    }
}

//get service by id
export const getServiceById = async (req, res) => {

    const serviceId = req.params;

    try {
        const service = await serviceClient.findUnique({
            where: {
                id: serviceId,
            }
        });

        res.status(200).json({ data: service });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to load the specific service!"});
    }
}

//update service 
export const updateService = async (req, res) => {

    const serviceId = req.params;
    const { serviceName, service, serviceCode, totalPrice, description } = req.body;

    try {
        const sservice = await serviceClient.update({
            where: {
                id: serviceId,
            },
            data: {
                serviceName, 
                service, 
                serviceCode, 
                totalPrice, 
                description
            }
        });

        res.status(200).json({ data: sservice });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update the specific service!"});
    }
}

//delete service 
export const deleteService = async (req, res) => {

    const serviceId = req.params;

    try {
        const service = await serviceClient.delete({
            where: {
                id: serviceId,
            }
        });

        res.status(200).json({ message: "This service was deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete the specific service!"});
    }
}