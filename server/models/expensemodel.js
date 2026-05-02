const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema(
  {
    title: String,
    amount: Number,
    category: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("expensemodel", expenseSchema);
