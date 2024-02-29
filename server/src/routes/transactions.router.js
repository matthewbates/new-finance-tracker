const express = require("express");

const transactionsController = require("../controllers/transactions.controller");

const transactionsRouter = express.Router();

// POST new transaction
transactionsRouter.post("/:userId", transactionsController.postNewTransaction);
// GET all transactions
transactionsRouter.get("/:userId", transactionsController.getAllTransactions);
// PATCH a transaction
transactionsRouter.patch(
  "/:transactionId",
  transactionsController.patchTransaction
);
// DELETE one transaction
transactionsRouter.delete(
  "/:transactionId",
  transactionsController.deleteTransaction
);

module.exports = transactionsRouter;
