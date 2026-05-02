const expensemodel = require("../models/expensemodel.js");

const getexpense = async (req, res) => {
  const getexpensedata = await expensemodel.find();
  res.json(getexpensedata);
};

const addexpense = async (req, res) => {
  const addingExpenses = new expensemodel(req.body);
  await addingExpenses.save();
  res.json(addingExpenses);
};

const updateexpense = async (req, res) => {
  const updateexpenses = await expensemodel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(updateexpenses);
};

const deleteexpense = async (req, res) => {
  const deleteexpenses = await expensemodel.findByIdAndDelete(req.params.id);
  res.json({ msg: "deleted", deleteexpenses });
};

module.exports = {
  getexpense: getexpense,
  addexpense: addexpense,
  updateexpense: updateexpense,
  deleteexpense: deleteexpense,
};
