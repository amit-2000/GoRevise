import React, { useState } from "react";

const Input = ({ str, str2 }) => {
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const handleClick = () => {
    setDone(true);
  };
  return (
    <div>
      <button onClick={handleClick}>concat</button>
      <p>
        {str + " "}
        {done ? input : <input onChange={handleChange}></input>}
        {" " + str2}
      </p>
    </div>
  );
};

export default Input;
