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

module.exports = { postNewTransaction };
