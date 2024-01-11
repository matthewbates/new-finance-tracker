const express = require("express");

const transactionsController = require("../controllers/transactions.controller");

const transactionsRouter = express.Router();

// POST new transaction
transactionsRouter.post("/", transactionsController.postNewTransaction);

module.exports = transactionsRouter;
