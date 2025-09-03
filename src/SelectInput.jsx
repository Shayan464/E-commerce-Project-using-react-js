import React from "react";

export default function ConditionSelect({ field, name, value, onChange, label }) {
  let options = [];

  if (field === "Gender") {
    options = ["Male", "Female", "Other"];
  } else if (field === "User Type") {
    options = ["User", "Admin"];
  }

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium mb-1">
          {label}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-52 text-black border border-gray-600 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 
                   px-2 py-1"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
