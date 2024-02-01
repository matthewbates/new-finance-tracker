const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: { String },
  amount: { Number },
  category: { String },
  date: { Date },
});

module.exports = mongoose.model("Transaction", transactionSchema);
