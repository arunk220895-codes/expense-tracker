import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseComponent from "./components/ExpenseComponent.js";
import ExpenseList from "./components/ExpenseList.js";

function ExpenseApp() {
  const [expenses, setExpenses] = useState([]);

  const fetchURL = "http://localhost:5000/api/expenses/";

  const fetchExpense = async () => {
    const getData = await axios.get(fetchURL);

    setExpenses(getData.data);
  };

  useEffect(() => {
    fetchExpense();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        💰 AK Expense Tracker
      </h1>

      {/* Main Card */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 space-y-6">
        {/* Form Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Add New Expense
          </h2>
          <ExpenseComponent onAdd={fetchExpense} />
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* List Section */}
        <div>
          <h2 className="bg-green-500 text-white p-4 rounded-lg mb-4 text-center font-medium">
            Expense List
          </h2>

          <ExpenseList expenses={expenses} onDelete={fetchExpense} />
        </div>
      </div>
    </div>
  );
}

export default ExpenseApp;
