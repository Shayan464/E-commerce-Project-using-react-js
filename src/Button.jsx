import React from "react";
import CommonButton from "./CommonButton";

const Button = ({ isEditing, handleCancel }) => (
  <div className="flex gap-4 mt-4 ">
    {isEditing ?  <CommonButton
        type='submit'
        label='Update'
         className="bg-indigo-600 hover:bg-indigo-700 w-32 py-2 text-white rounded-md transition "
        /> : <CommonButton
        type='submit'
        label='Submit'
        className="bg-indigo-600 hover:bg-indigo-700 w-32 py-2 text-white rounded-md transition "
        />}
    {isEditing && <CommonButton
      type='submit'
      label="Cancel"
      onCancel={handleCancel}
      className="bg-gray-500 hover:bg-gray-600 w-32 py-2 text-white rounded-md transition "
      />}
  </div>
);

export default Button;
