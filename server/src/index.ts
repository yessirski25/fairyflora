import express from "express";
import employeeRouter from "../routes/employee.router"

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json())

app.use('/employee', employeeRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
