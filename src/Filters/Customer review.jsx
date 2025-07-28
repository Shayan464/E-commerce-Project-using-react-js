import { Rating } from "@mui/material";
import React from "react";

const Customerreview = ({ selectedRating, setSelectedRating }) => {
  return (
    <div className="mt-2">
      <h2 className="text-white font-semibold mb-1">Customer Reviews :</h2>
      <div className="bg-white p-1 rounded shadow w-fit">
        <Rating
          name="user-rating"
          value={selectedRating}
          precision={0.5}
          onChange={(e,newValue) => {
            setSelectedRating(newValue);
          }}
          size="medium"
          sx={{ color: "#f59e0b" }}
          />

      </div>
      <button onClick={() => setSelectedRating("")} className="self-start text-sm text-indigo-300 hover:text-indigo-100">Clear</button>
    </div>
  );
};

export default Customerreview;
