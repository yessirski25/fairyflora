import express from "express";
import employeeRouter from "../routes/employee.router";
import branchRouter from "../routes/branch.router";
import serviceRouter from "../routes/service.router";
import addonRouter from "../routes/addon.router";
import customerRouter from "../routes/customer.router";
import transactionRouter from "../routes/transaction.router";
import inventoryRouter from "../routes/inventory.router";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/employee', employeeRouter);
app.use('/branch', branchRouter);
app.use('/service', serviceRouter);
app.use('/addon', addonRouter);
app.use('/customer', customerRouter);
app.use('/transaction', transactionRouter);
app.use('/inventory', inventoryRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
