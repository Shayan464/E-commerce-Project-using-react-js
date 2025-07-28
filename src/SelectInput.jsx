import React from 'react';

const SelectInput = ({ name,value,onChange ,label}) => (
<div className="mb-4">
  <label className="block  text-sm font-medium mb-1">
    {label}
  </label>
  <select
  name={name}
    value={value}
    onChange={onChange}
    className="w-50 text-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 px-2 py-1"
  >
    <option value="">Select</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
  </select>
</div>
);

export default SelectInput;


