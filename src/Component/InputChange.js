import React, { useState } from "react";

const InputChange = ({ index, str_arr }) => {
  const [inp_arr, setInp__arr] = useState([]);
  const handleInpute = (e) => {
    const val = [...inp_arr, e.target.value];
    setInp__arr(val);
  };
  console.log(inp_arr);
  return (
    <div>
      {str_arr.map((item, idx) => {
        if (index.includes(idx)) {
          return <input key={idx} onChange={(e) => handleInpute(e)}></input>;
        } else return <span key={idx}>{item} </span>;
      })}
    </div>
  );
};

export default InputChange;
