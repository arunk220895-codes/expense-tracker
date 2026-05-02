const express = require("express");
const cors = require("cors");
const expenseRouter = require("./routes/expenseroute.js");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.use(express.json());

app.use("/api/expenses", expenseRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("server running on port", PORT);
    });
  })
  .catch((err) => {
    console.error(`error message: err.message`);
    if (process.env.ENVIRONMENT == "PRODUCTION") {
      process.exit(1);
    }
  });
