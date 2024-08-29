import React from "react";
import { useSelector } from "react-redux";
const Dolor = () => {
  const coin = useSelector((state) => state.counter.count);
  const ThemeTextColor = useSelector((state) => state.theme.color);
  return (
    <div>
      <span className="value" style={{ color: ThemeTextColor }}>
        coin:{coin}
      </span>
    </div>
  );
};

export default Dolor;
