const mongoose = require("mongoose");

const Transaction = require("../models/transactions.model");

const postNewTransaction = (req, res, next) => {
  // const transactionDate = req.body.date;
  const transaction = new Transaction({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    amount: req.body.amount,
    date: req.body.date,
  });
  return transaction
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Transaction recorded successfully!",
        transaction: {
          _id: result._id,
          name: result.name,
          amount: result.amount,
          date: result.date,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const getAllTransactions = (req, res, next) => {
  Transaction.find()
    .exec()
    .then((docs) => {
      const response = {
        transactions: docs.map((transaction) => {
          return {
            id: transaction._id,
            name: transaction.name,
            category: transaction.category,
            amount: transaction.amount,
            date: transaction.date,
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Transaction not found!",
      });
    });
};

module.exports = { postNewTransaction, getAllTransactions };
