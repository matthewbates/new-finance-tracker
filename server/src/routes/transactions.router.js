const express = require("express");

const transactionsController = require("../controllers/transactions.controller");

const transactionsRouter = express.Router();

// POST new transaction
transactionsRouter.post("/", transactionsController.postNewTransaction);
// GET all transactions
transactionsRouter.get("/", transactionsController.getAllTransactions);

module.exports = transactionsRouter;
