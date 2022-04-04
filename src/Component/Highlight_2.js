import React, { useState } from "react";
import "./highlightCSS.css";
import InputChange from "./InputChange";
function HighlightTwo() {
  const [para] = useState(
    "Many novice writers tend to make a sharp distinction between content and style, thinking that a paper can be strong in one and weak in the other, but focusing on organization shows how content and style converge in deliberative academic writing. Your professors will view even the most elegant prose as rambling and tedious if there isn’t a careful, coherent argument to give the text meaning. Paragraphs are the “stuff ” of academic writing and, thus, worth our attention here."
  );
  const [toogle, setToggle] = useState(false);
  const [inp, setInp] = useState(false);
  const str_arr = para.split(" ");
  const [index, setIndex] = useState([]);
  console.log(index);
  const handleHighlight = (e, idx) => {
    setToggle(false);
    e.preventDefault();
    const new_index = [...index, idx];
    setIndex(new_index);
  };
  const highlight = () => {
    setToggle(true);
  };
  const handleInput = () => {
    setInp(true);
    // setToggle(false);
  };
  return (
    <div>
      <p>
        {inp ? (
          <InputChange id="" index={index} str_arr={str_arr} />
        ) : toogle ? (
          str_arr.map((item, idx) => {
            return (
              <span
                key={idx}
                onClick={(e) => handleHighlight(e, idx)}
                className={
                  index.includes(idx) ? "highlight__yellow" : "hover-item"
                }
              >
                {item}{" "}
              </span>
            );
          })
        ) : (
          str_arr.map((item, idx) => {
            return (
              <span
                key={idx}
                onClick={(e) => handleHighlight(e, idx)}
                className={index.includes(idx) ? "highlight" : "hover-item"}
              >
                {item}{" "}
              </span>
            );
          })
        )}
      </p>
      <button onClick={highlight}>Highlight</button>
      <br></br>
      <button onClick={handleInput}>Done</button>
    </div>
  );
}

export default HighlightTwo;
