import React from "react";
import axios from "axios";

const appURL = "http://localhost:5000/api/expenses/";

export default function ExpenseList({ expenses, onDelete }) {
  const handleDelete = async (id) => {
    try {
      const delexpense = await axios.delete(appURL + id);
      onDelete();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const updateexpense = await axios.put(appURL + id);
      onDelete();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <ul className="space-y-3">
        {expenses.map((e) => (
          <li
            key={e._id}
            className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            {/* Left side - details */}
            <div>
              <h3 className="font-semibold text-gray-800">{e.title}</h3>
              <p className="text-sm text-gray-500">
                ₹{e.amount} • {e.category}
              </p>
            </div>

            {/* Right side - actions */}
            <div className="flex gap-2">
              <button
                onClick={() => handleUpdate(e._id)}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Update
              </button>

              <button
                onClick={() => handleDelete(e._id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Empty state */}
      {expenses.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No expenses yet. Add one 👆
        </p>
      )}
    </div>
  );
}
