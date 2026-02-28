import React from 'react';

const DescriptionField = ({ value, name, onChange, label }) => (
  <div className="flex flex-col  w-full">
    <label className=" text-sm font-medium mb-2">{label}</label>
    <textarea
      value={value}
      name={name}
      onChange={onChange}
      placeholder="Tell us about yourself"
      className="w-60 max-w-md border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 p-2 tracking-wider font-serif"
    />
  </div>
);

export default DescriptionField;
