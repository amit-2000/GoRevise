import React, { useState } from "react";
import "./input.css";
const Input = ({ str, str2, removedWord, inputDone }) => {
  const [input, setInput] = useState("");
  const [done, setDoneInput] = useState(false);
  const [disable, setDisable] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.value);
    setDisable(false);
    setInput(e.target.value);
  };
  const handleClick = () => {
    if (input === removedWord) {
      console.log("result: true");
    } else {
      console.log("Result : false");
    }
    if (input.length === 0) {
      console.log(input.length);
      return setDisable(true);
    }
    setDoneInput(true);
  };
  const handleRestart = () => {
    inputDone(false);
  };

  return (
    <div>
      <p>
        {str + " "}
        <span
          className={
            done
              ? input === removedWord
                ? "replaced__word-correct"
                : "replaced__word-wrong"
              : ""
          }
        >
          {" "}
          {done ? input : <input onChange={handleChange}></input>}
        </span>
        {" " + str2}
      </p>
      <button onClick={handleClick} disabled={disable}>
        submit
      </button>
      <button onClick={handleRestart}>restart</button>
    </div>
  );
};

export default Input;
