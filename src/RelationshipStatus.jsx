import React from "react";

const RelationshipStatus = ({ value, name, onChange }) => (
  <div>
    <label className="w-1/3 text-sm font-medium ">Relationship Status: </label>
    <div className="flex space-x-4">
      {['Married','Single'].map((status) => (
        <label
          key={status}
          className="flex items-center space-x-2 text-sm font-medium"
        >
          <input
            type="radio"
            name={name}
            value={status}
            checked={value === status}
            onChange={onChange}
          />
          <span>{status}</span>
        </label>
      ))}
    </div>
  </div>
);

export default RelationshipStatus;
