import express from "express";
import employeeRouter from "../routes/employee.router";
import branchRouter from "../routes/branch.router";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/employee', employeeRouter);
app.use('/branch', branchRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
