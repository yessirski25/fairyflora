import { PrismaClient } from "@prisma/client";

const employeeClient = new PrismaClient().employee;

//create 
export const createEmployee = async (req, res) => {

    const employeeData = req.body;

    try {
        const employee = await employeeClient.create({
            data: employeeData
        })

        res.status(200).json({ data: employee })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create employee"})
    }
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
export const updateEmployee = async (req, res) => {

    const employeeId = req.params.id;
    const { firstName, middleName, lastName, branchId, salary, contactNumber, dateHired, role, emailAddress, password } = req.body;

    try {
        const employee = await employeeClient.update({
            where : {
                id: employeeId,
            },
            data: {
                firstName,
                middleName,
                lastName,
                salary, 
                contactNumber, 
                dateHired, 
                role, 
                emailAddress, 
                password
            }
        });

        res.status(200).json({ message: `Employee ${employee.firstName} was update successfully!` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create employee"});
    }
}
//delete employee
export const deleteEmployee = async (req, res) => {

    const employeeId = req.params.id;

    try {
        const employee = await employeeClient.delete({
            where : {
                id: employeeId,
            }
        });

        res.status(200).json({ message: `Employee ${employee.firstName} was deleted successfully!` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete employee"});
    }
}