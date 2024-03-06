const mongoose = require("mongoose");

const Transaction = require("../models/transactions.model");

const postNewTransaction = (req, res, next) => {
  const userId = req.params.userId;
  const { name, category, amount, date } = req.body;

  mongoose
    .model("User")
    .findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      // create a new transaction
      const transaction = new Transaction({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        category: category,
        amount: amount,
        date: date,
        user: user._id,
      });

      return transaction
        .save()
        .then((result) => {
          console.log(result);
          const { _id, name, category, amount, date } = result;
          user.transactions.push(result._id);

          return user.save().then(() => {
            res.status(201).json({
              message: "Transaction recorded",
              createdTransaction: {
                _id: _id,
                name: name,
                category: category,
                amount: amount,
                date: date,
              },
            });
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        });
    });
};

const getAllTransactions = (req, res, next) => {
  const userId = req.params.userId;

  Transaction.find({ user: userId })
    .exec()
    .then((docs) => {
      console.log(docs);
      // base case if the user has no recorded transaction
      if (!docs || docs.length === 0) {
        res.status(404).json({
          message: "User has no recorded transactions",
        });
      } else {
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
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Transaction not found!",
      });
    });
};

const patchTransaction = (req, res, next) => {
  const transactionId = req.params.transactionId;

  Transaction.findOneAndUpdate(
    { _id: transactionId },
    { $set: { category: req.body.category } }
  )
    .exec()
    .then((updatedTransaction) => {
      if (!updatedTransaction) {
        return res.status(404).json({
          message: "Transaction not found",
        });
      }
      res.status(200).json({
        message: "Category updated successfully",
        updatedTransaction: {
          _id: updatedTransaction.id,
          category: updatedTransaction.category,
        },
      });
    })
    .catch((err) => {
      console.log("Cannot update transaction");
      res.status(500).json({
        error: err,
      });
    });
};

const deleteTransaction = (req, res, next) => {
  const transactionId = req.params.transactionId;
  Transaction.findOneAndDelete({ _id: transactionId })
    .exec()
    .then((response) => {
      console.log(response);
      if (!response) {
        return res.status(404).json({
          message: "Transaction not found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  postNewTransaction,
  getAllTransactions,
  patchTransaction,
  deleteTransaction,
};
