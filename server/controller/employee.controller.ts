import { PrismaClient } from "@prisma/client";

const employeeClient = new PrismaClient().employee;

//create 
export const createEmployee = async (req, res) => {
    try {

    } catch {}
}

//get all employees
export const getAllEmployees = async (req, res) => {
    try {
        const allEmployees = await employeeClient.findMany();

        res.status(200).json({ data: allEmployees});
    } catch {
        res.status(404).json({ message: "No employees were found!"});
    }
}

//get employee by id
export const getEmployeeById = async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await employeeClient.findUnique({
            where: {
                id: employeeId,
            }
        });

        res.status(200).json({ data: employee });
    } catch {
        res.status(404).json({ message: "This employee is non existent!"});
    }
}
//update employee

//delete employee