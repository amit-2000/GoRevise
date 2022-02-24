import React, { useState } from "react";
import "./input.css";
const Input = ({ str, str2, removedWord, inputDone }) => {
  const [input, setInput] = useState(""); // input string.
  const [done, setDoneInput] = useState(false); // hide unhide Input field.
  const [disable, setDisable] = useState(false); // disable btn if input field is empty.
  const handleChange = (e) => {
    // console.log(e.target.value);
    setDisable(false); // have input ? btn-disable = false :
    setInput(e.target.value);
  };
  const handleClick = () => {
    if (input.length === 0) {
      console.log("Btn is disbled , enter string input");
      setDisable(true);
      return;
    }
    setDoneInput(true);
  };
  const handleRestart = () => {
    inputDone(false); // restart again with new para.
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
