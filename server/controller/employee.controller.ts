const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { PrismaClient } from "@prisma/client";

const employeeClient = new PrismaClient().employee;

//create 
export const createEmployee = async (req, res) => {

    const employeeData = req.body;

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(employeeData.password, saltRounds);

        const employee = await employeeClient.create({
            data: {
                ...employeeData,
                password: hashedPassword
            }
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
        const employeeId = parseInt(req.params.id);
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

    const employeeId = parseInt(req.params.id, 10);
    const { firstName, middleName, lastName, salary, contactNumber, dateHired, role, emailAddress, password, assignedBranchId } = req.body;

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)

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
                password: hashedPassword,
                assignedBranchId
            }
        });

        res.status(200).json({ message: `Employee ${employee.firstName} was update successfully!` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update employee"});
    }
}
//delete employee
export const deleteEmployee = async (req, res) => {

    const employeeId = parseInt(req.params.id);

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

//login employee
export const loginEmployee = async (req, res) => {
    
    try {

        const { emailAddress, password } = req.body;
        
        if(!emailAddress || !password) {
            res.status(400);
            throw new Error("please provide response for both fields!");
        }
    
        const employee = await employeeClient.findUnique({
            where: { emailAddress }
        })
    
        if (!employee) {
            res.status(400);
            throw new Error("there is no such account!");
        }
    
        const isPasswordValid = await bcrypt.compare(password, employee.password);

        if (isPasswordValid){
            const accessToken = jwt.sign({
                employee: {
                    firstName: employee.firstName,
                    middleName: employee.middleName,
                    lastName: employee.lastName,
                    salary: employee.salary,
                    contactNumber: employee.contactNumber,
                    dateHired: employee.dateHired,
                    role: employee.role,
                    emailAddress: employee.emailAddress,
                    assignedBranchId: employee.assignedBranchId,
                    id: employee.id
                }
            }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" }
        );

        res
            .cookie("auth_token", accessToken, {
                maxAge:600000,
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                path: "/"
            }).send({ success: true, message: "Login successful!", data: employee});
        } else {
            res.status(400).json({ message: "Either your email or your password is invalid. Double check."});
        }
        } 
     catch(error) {
        res.status(400).json({ message: error.message });
        console.error(error);
    }
}

export const currentEmployee = (req, res) => {
    res.json({
        success: true,
        data: req.employee
    });
};

export const logoutEmployee = async (req, res) => {
    res.clearCookie("auth_token",{ 
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/"
    }).send({ success: true, message: "Logged out successfully!" });
}