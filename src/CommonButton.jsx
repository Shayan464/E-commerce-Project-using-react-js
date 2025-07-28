import React from "react";

const CommonButton = ({ label, onClick, type = "button" ,className}) => (
  <button
    type={type}
    className={className}
    onClick={onClick}
  >
    {label}
  </button>
);

export default CommonButton;