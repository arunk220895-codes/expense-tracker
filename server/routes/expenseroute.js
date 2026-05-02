const express = require("express");
const router = express.Router();
const {
  getexpense,
  addexpense,
  updateexpense,
  deleteexpense,
} = require("../controllers/expensescontroller.js");

// fetching all expenses data
router.get("/", getexpense);

// adding expenses data
router.post("/", addexpense);

// updating expenses data
router.put("/:id", updateexpense);

// removing data
router.delete("/:id", deleteexpense);

module.exports = router;
