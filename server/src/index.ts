import express from "express";
import employeeRouter from "../routes/employee.router";
import branchRouter from "../routes/branch.router";
import serviceRouter from "../routes/service.router";
import addonRouter from "../routes/addon.router";
import customerRouter from "../routes/customer.router";
import transactionRouter from "../routes/transaction.router";
import inventoryRouter from "../routes/inventory.router";

var cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true}));

app.use('/employee', employeeRouter);
app.use('/branch', branchRouter);
app.use('/service', serviceRouter);
app.use('/addon', addonRouter);
app.use('/customer', customerRouter);
app.use('/transaction', transactionRouter);
app.use('/inventory', inventoryRouter);
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

//     next();
//   });
app.options('/employee/login', cors())
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
