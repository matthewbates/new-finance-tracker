const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const transactionsRouter = require("./routes/transactions.router");
const usersRouter = require("./routes/users.router");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/transactions", transactionsRouter);
app.use("/users", usersRouter);

module.exports = app;
