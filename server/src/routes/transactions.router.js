const express = require("express");

const transactionsController = require("../controllers/transactions.controller");

const transactionsRouter = express.Router();

// POST new transaction
transactionsRouter.post("/", transactionsController.postNewTransaction);
// GET all transactions
transactionsRouter.get("/", transactionsController.getAllTransactions);
// PATCH a transaction
// Example route definition
transactionsRouter.patch(
  "/:transactionId",
  transactionsController.patchTransaction
);

module.exports = transactionsRouter;
