import React from "react";
import CommonButton from "./CommonButton";

const DataTable = ({ data, onEdit, onDelete }) => (
  <>
    <h3 className="text-2xl font-semibold text-center mb-4 text-black">
      User Details
    </h3>
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full border border-black text-sm bg-gray-100">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Language</th>
            <th>Relation</th>
            <th>DOB</th>
            <th>Age</th>
            <th>Description</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-200">
              <td className="px-2 py-2 border">{item.Name.FirstName}</td>
              <td className="px-2 py-2 border">{item.Name.LastName}</td>
              <td className="px-2 py-2 border">{item.Email}</td>
              <td className="px-2 py-2 border">{item.Password}</td>
              <td className="px-2 py-2 border">{item.Gender}</td>
              <td className="px-2 py-2 border">
                {Array.isArray(item.Language)
                  ? item.Language.join(", ")
                  : item.Language}
              </td>
              <td className="px-2 py-2 border">{item.Relation}</td>
              <td className="px-2 py-2 border">{item.DOB}</td>
              <td className="px-2 py-2 border">{item.Age}</td>
              <td className="px-2 py-2 border">{item.Description}</td>
              <td className="px-2 py-2 border">{item.Type}</td>
              <td className="px-2 py-2 border">
                <div className="flex gap-1">
                  <CommonButton
                    onClick={() => onEdit(item)}
                    className="bg-blue-500 hover:bg-blue-600  px-2 py-1 rounded text-xs w-22  text-white transition  "
                    label="Edit"
                  />

                  <CommonButton
                    onClick={() => onDelete(item.id)}
                    className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-xs w-22  text-white transition "
                    label="Delete"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

export default DataTable;
