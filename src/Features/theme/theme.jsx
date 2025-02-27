import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTextColor } from "./themeSlice";
const Theme = () => {
  const [color, setColor] = useState("white");
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button
        className="btn"
        onClick={() => {
          dispatch(changeTextColor(color));
        }}
      >
        Change text color
      </button>
    </div>
  );
};

export default Theme;
