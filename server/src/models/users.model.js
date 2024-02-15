const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  email: {
    type: String,
    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: String,
  confirm: String,
  transactions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transaction",
  },
});

module.exports = mongoose.model("User", userSchema);
