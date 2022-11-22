import React, { useState, useEffect } from "react";

const Btn = ({ color, value, setSelectedBackgroundColor }) => {
  // const [colors, setColors] = useState({
  //   // backgroundColor: "",
  //   // color: "",
  //   backgroundColor: value,
  //   color: color,
  // });
  // useEffect(() => {
  //   setColors((prevColor) => ({
  //     ...prevColor,
  //     backgroundColor: value,
  //     color: color,
  //   }));
  // }, []);
  const colors = {
    backgroundColor: color,
    color: value,
  };
  const toggleColor = (color, value) => {
    setSelectedBackgroundColor(color);
  };
  // console.log(colorStyles)

  return (
    <div>
      <div style={colors} className="p-5 border-[10px]">
        <button onClick={() => toggleColor(color, value)}>
          {color} + {value}
        </button>
      </div>
    </div>
  );
};

export default Btn;
