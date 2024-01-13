const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String },
  amount: { type: Number },
  category: { type: String },
  date: { type: Date },
});

module.exports = mongoose.model("Transaction", transactionSchema);
