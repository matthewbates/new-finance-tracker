const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const transactionsRouter = require("./routes/transactions.router");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/transactions", transactionsRouter);

module.exports = app;
