import express from "express";
import employeeRouter from "../routes/employee.router";
import branchRouter from "../routes/branch.router";
import serviceRouter from "../routes/service.router";
import addonRouter from "../routes/addon.router"

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/employee', employeeRouter);
app.use('/branch', branchRouter);
app.use('/service', serviceRouter);
app.use('/addon', addonRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
